# Falcon

## Информация

::: info

- https://falcon.readthedocs.io/en/stable/ - Falcon
- https://insomnia.rest/ - Insomnia REST Client

:::

```bash
pip install falcon
pip install waitress
pip install [gunicorn|uwsgi|waitress]
```

- _Falcon_ является фреймворком _WSGI_, поэтому для работы веб-приложения потребуется сервер приложений WSGI

1. _Gunicorn_. Gunicorn для _UNIX-среды_ несовместим с Windows. UNIX - семейство операционных систем (Mac OS X, GNU/Linux).
2. _uWSGI_
3. _Waitress_

::: warning

- Примеры написаны для Falcon до версии 3.0. В Falcon 3.0 `falcon.API` переименован в `falcon.App` (старое имя устарело), `resp.body` - в `resp.text` (`resp.body` удалён в Falcon 4.0)
- С Falcon 4.0 заголовок и описание ошибки передаются только по имени: `falcon.HTTPBadRequest(title='Bad request', description='…')`

:::

## Simple Text

```python
import falcon
from waitress import serve


class ObjRes(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = 'hello world'


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```bash
python app.py
# http://127.0.0.1:8001/
```

## HTML

```python
import falcon
from waitress import serve


class ObjRes(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.content_type = falcon.MEDIA_HTML
        resp.body = '<h1>Hello World</h1>'


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```bash
python app.py
# http://127.0.0.1:8001/
```

## Json (Object)

```python
import json

import falcon
from waitress import serve


class ObjRes(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        content = {
            'name': 'Tony',
            'age': '25',
            'country': 'Russia'
        }
        resp.body = json.dumps(content)


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```bash
# http://127.0.0.1:8001/
{"name": "Tony", "age": "25", "country": "Russia"}
```

## Json (read URL)

```python
import json

import falcon
from waitress import serve


class ObjRes(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200

        validate_params = True

        if 'name' not in req.params:
            validate_params = False

        if validate_params:
            output = {
                'name': req.params['name']
            }
        else:
            output = {
                'error': 'You need name in your params'
            }
        resp.body = json.dumps(output)


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```bash
# http://127.0.0.1:8001/
{"error": "You need name in your params"}

# http://127.0.0.1:8001/?name=Tony
{"name": "Tony"}
```

## Read Params

```python
# Read url params http://127.0.0.1:8001/?name=Tony
name = req.params['name']
# req.host
# req.path
# req.query_string

# Read json params {"name": "Tony"}
data = json.loads(req.stream.read())
a = data['name']
```

## HTTP-методы GET/POST/PUT/DELETE

```python
import json

import falcon
from waitress import serve


class ObjRes(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        data = json.loads(req.stream.read())
        output = {
            'msg': 'Hello {0}'.format(data['name'])
        }
        resp.body = json.dumps(output)

    def on_post(self, req, resp):
        resp.status = falcon.HTTP_200
        data = json.loads(req.stream.read())
        equal = int(data['x']) + int(data['y'])
        output = {
            'msg': 'x: {x} + y: {y} is equal to {e}'.format(
                x=data['x'], y=data['y'], e=equal
            )
        }
        resp.body = json.dumps(output)

    def on_put(self, req, resp):
        resp.status = falcon.HTTP_200
        output = {
            'msg': 'put is not supported'
        }
        resp.body = json.dumps(output)

    def on_delete(self, req, resp):
        resp.status = falcon.HTTP_200
        output = {
            'msg': 'delete is not supported'
        }
        resp.body = json.dumps(output)


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```python
# GET
# JSON { "name": "Tony" }
# Result { "msg": "Hello Tony" }

# POST
# JSON { "x": "100", "y": "200" }
# Result { "msg": "x: 100 + y: 200 is equal to 300" }
```

## Validated JSON input

```python
import json

import falcon
from waitress import serve


class ObjRes(object):

    __json_content = {}

    def __validate_json_input(self, req):
        try:
            self.__json_content = json.loads(req.stream.read())
            print('json from client is validated')
            return True
        except ValueError:
            self.__json_content = {}
            print('json from client is not validated')
            return False

    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        validated = self.__validate_json_input(req)
        output = {
            'status': 200,
            'msg': None
        }

        if validated:
            if 'name' in self.__json_content:
                output['msg'] = 'Hello {name}'.format(name=self.__json_content['name'])
            else:
                output['status'] = 400
                output['msg'] = 'json input needs name params'
        else:
            output['status'] = 400
            output['msg'] = 'json input is not validated'

        resp.body = json.dumps(output)


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

## Hooks

```python
import falcon
from waitress import serve


class Authorize(object):
    def __init__(self, roles):
        self._roles = roles

    def __call__(self, req, resp, resource, params):
        # DB - Get user role
        if 'Admin' in self._roles:
            req.user_id = 5
        else:
            raise falcon.HTTPBadRequest('Bad request', 'You are not an admin right now')


class ObjRes(object):

    @falcon.before(Authorize(['Admin', 'Normal', 'Guest']))
    def on_get(self, req, resp):
        output = {
            'method': 'get',
            'user-id': req.user_id
        }
        resp.media = output

    @falcon.before(Authorize(['Normal', 'Guest']))
    def on_post(self, req, resp):
        output = {
            'method': 'post',
            'user-id': req.user_id
        }
        resp.media = output


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

## Basic Auth

```python
import base64

import falcon
from waitress import serve

user_accounts = {
    'admin': '123'
}


class Authorize(object):
    def __init__(self):
        pass

    def __auth_basic(self, username, password):
        if username in user_accounts and user_accounts[username] == password:
            print('You have access')
        else:
            raise falcon.HTTPUnauthorized('Unauthorized', 'Your access is not allowed')

    def __call__(self, req, resp, resource, params):
        auth_exp = req.auth.split(' ') if req.auth is not None else (None, None)

        if auth_exp[0] is not None and auth_exp[0].lower() == 'basic':
            auth = base64.b64decode(auth_exp[1]).decode('utf-8').split(':')
            username = auth[0]
            password = auth[1]
            self.__auth_basic(username, password)
        else:
            raise falcon.HTTPNotImplemented(
                'Not Implemented', "You don't use the right auth method"
            )


class ObjRes(object):

    @falcon.before(Authorize())
    def on_get(self, req, resp):
        output = {
            'method': 'get'
        }
        resp.media = output


api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

<v-breadcrumbs :items="['Insomnia', 'Basic Auth']" />
