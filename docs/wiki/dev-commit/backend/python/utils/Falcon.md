# Falcon

## Basic

::: info
https://falcon.readthedocs.io/en/stable/
https://insomnia.rest/
:::

```js
pip install falcon
pip install waitress
pip install [gunicorn|uwsgi|waitress]
```
- Falcon является фреймворком WSGI, потому для работы веб-приложения потребуется сервер приложений WSGI

```bash
1.Gunicorn. Gunicorn дляUNIX-средынесовместим с Windows. UNIX - семейство операционных систем (Mac OS X, GNU/Linux).
2.uWSGI3.Waitress```

## Simple Text

```js
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

```js
python app.py
http://127.0.0.1:8001/
```

## HTML

```js
import falcon
from waitress import serve

class ObjRes(object):
    def on_get(self, req, resp):
    	resp.status = falcon.HTTP_200
    	resp.content_type = falcon.MEDIA_HTML
    	resp.body = '&lt;h1&gt;Hello World&lt;/h1&gt;'

api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```js
python app.py
http://127.0.0.1:8001/
```

## Json (Object)

```js
import falcon, json
from waitress import serve

class ObjRes(object):
    def on_get(self, req, resp):
    	resp.status = falcon.HTTP_200
    	content = {
    		'name':'Tony',
    		'age':'25',
    		'country':'Russia'
    	}
    	resp.body = json.dumps(content)

api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```python
http://127.0.0.1:8001/
{"name": "Tony", "age": "25", "country": "Russia"}
```

## Json (read URL)

```js
import falcon, json
from waitress import serve

class ObjRes(object):
	def on_get(self, req, resp):
		resp.status = falcon.HTTP_200

		validate_params = True

		if 'name' not in req.params:
			validate_params = False

		if (validate_params is True):
			output = {
				'name' : req.params['name']
			}
		else:
			output = {
				'error' : 'You need name in your params'
			}
		resp.body = json.dumps(output)

api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```python
http://127.0.0.1:8001/
{"error": "You need name in your params"}

http://127.0.0.1:8001/?name=Tony
{"name": "Tony"}
```

## Read Params

```python
# read url params http://127.0.0.1:8001/?name=Tony
name = req.params['name']
# req.host
# req.path
# req.query_string

# read json params {"name" : "Tony"}
data = json.loads(req.stream.read())
a = data['name']
```

## HTTP-методы GET/POST/PUT/DELETE

```python
import falcon, json
from waitress import serve

class ObjRes(object):
    def on_get(self, req, resp):
    	resp.status = falcon.HTTP_200
    	data = json.loads(req.stream.read())
    	output = {
    		'msg' : 'Hello {0}'.format(data['name'])
    	}
    	resp.body = json.dumps(output)

    def on_post(self, req, resp):
    	resp.status = falcon.HTTP_200
    	data = json.loads(req.stream.read())
    	equel = int(data['x']) + int(data['y'])
    	output = {
    		'msg' : 'x: {x} + y: {y} is equel to {e}'.format(x=data['x'], y=data['y'], e=equel)
    	}
    	resp.body = json.dumps(output)

    def on_put(self, req, resp):
    	resp.status = falcon.HTTP_200
    	output = {
    		'msg' : 'put is not supported'
    	}
    	resp.body = json.dumps(output)

    def on_delete(self, req, resp):
    	resp.status = falcon.HTTP_200
    	output = {
    		'msg' : 'delete is not supported'
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
# Result { "msg": "x: 100 + y: 200 is equel to 300" }
```

## Validated JSON input

```python
import falcon, json
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
			'status' : 200,
			'msg' : None
		}

		if (validated == True):
			if 'name' in self.__json_content:
				output['msg'] = 'Hello {name}'.format(name=self.__json_content['name'])
			else:
				output['status'] = 404
				output['msg'] = 'json input need name params'
		else:
			output['status'] = 404
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
			raise falcon.HTTPBadRequest('Bad request', 'You are not a admin right now')

class ObjRes(object):

	@falcon.before(Authorize(['Admin','Normal','Guest']))

	def on_get(self, req, resp):
		output = {
			'method':'get',
			'user-id':req.user_id
		}
		resp.media = output

	@falcon.before(Authorize(['Normal','Guest']))
	def on_post(self, req, resp):
		output = {
			'method':'post',
			'user-id':req.user_id
		}
		resp.media = output

api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

## Basic Auth

```python
import falcon
import base64
from waitress import serve

user_accounts = {
	'admin':'123'
}

class Authorize(object):
	def __init__(self):
		pass

	def __auth_basic(self, username, password):
		if username in user_accounts and user_accounts[username] == password:
			print('You have access')
		else:
			raise falcon.HTTPUnauthorized('Unauthorized', 'You access is not a allowed')

	def __call__(self, req, resp, resource, params):
		auth_exp = req.auth.split(' ') if req.auth is not None else (None, None)

		if auth_exp[0] is not None and auth_exp[0].lower() == 'basic':
			auth = base64.b64decode(auth_exp[1]).decode('utf-8').split(':')
			username = auth[0]
			password = auth[1]
			self.__auth_basic(username, password)
		else:
			raise falcon.HTTPNotInplemented('Not Inplemented', 'You don\'t use the right auth method')

class ObjRes(object):

	@falcon.before(Authorize())

	def on_get(self, req, resp):
		output = {
			'method':'get'
		}
		resp.media = output

api = falcon.API()
api.add_route('/', ObjRes())
serve(api, host="127.0.0.1", port=8001)
```

```bash
Insomnia -> Basic Auth
```
