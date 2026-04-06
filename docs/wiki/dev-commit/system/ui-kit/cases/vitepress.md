# Vitepress

## Code

- `ts{4}` - одна строка
- `js{2,5,7}` - несколько строк
- `js{8-10}` - диапазон строк
- `js{8-10,19-22}` - несколько диапазонов строк

```ts{2-5,8-10}
class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }
  getMaxDistance() {
    let distance = this.fuelCapacity * this.fuelEfficiency;
    if (this instanceof HybridVehicle) {
      distance += this.electricRange;
    }
    return distance;
  }
}
```
