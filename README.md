<p align="center"><strong>deep-enough-equals</strong></p>
<p align="center"><i>When shallow is too shallow and deep is too deep</i></p>

## Installation

```
npm i @rognstadragnar/deep-enough-equals
```

## Usage

```javascript
import { deepEnoughEquals } from '@rognstadragnar/deep-enough-equals'

const thingA = { some: ['thing'] }
const thingB = { some: ['thing'] }
const thingC = { some: ['other', 'thing'] }

deepEnoughEquals(thingA, thingB)
// > true

deepEnoughEquals(thingA, thingC)
// > false
```

## License

[MIT](LICENSE).
