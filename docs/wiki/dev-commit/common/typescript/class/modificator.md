# Модификаторы полей

## Виды модификаторов

- _protected_ - внутри класса и в наследниках
- _public_ - внутри класса и для всех инстансов (_задан по умолчанию_)
- _private_ - внутри класса

```ts
class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
// cat.voice
```
