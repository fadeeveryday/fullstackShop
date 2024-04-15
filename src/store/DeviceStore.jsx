import { makeAutoObservable } from "mobx"

export default class DeviceStore {
  constructor () {
    this._types = [
      {id: 1, name: "Холодильники"},
      {id: 2, name: "Смартфоны"}
    ]
    this._brand = [
      {id: 1, name: "Samsung"},
      {id: 2, name: "Apple"}
    ]
    this._devices = [
      {id: 1, name: "Iphone 12 pro", price: 65000, rating: 5,},
      {id: 1, name: "Iphone 12 pro", price: 65000, rating: 5,},
      {id: 1, name: "Iphone 12 pro", price: 65000, rating: 5,},
      {id: 1, name: "Iphone 12 pro", price: 65000, rating: 5,},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrand(brand) {
    this._brand = brand
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this.types
  }
  get brand() {
    return this.brand
  }
  get devices() {
    return this.devices
  }
}