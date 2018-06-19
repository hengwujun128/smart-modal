## this is a modal plugin

Simple to use,highly customizable

## Install

```
npm install smart-modal --save
```

## How to use?

### 1.basic useage

> 1.in your main.js

```
import modal from "smart-modal"

vue.use(modal)
```

> 2.in your component

```
<modal name="myModal">hello,world</modal>

methods: {
  show () {
    this.$modal.show('myModal');
  },
  hide () {
    this.$modal.hide('myModal');
  }
}
```
