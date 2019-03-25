# react-character-counter

## Installation

### Package Manager

#### NPM

```
npm install react-character-counter --save
```

### Basic Usage

This Component only works for controlled inputs

```
import CharacterCounter from 'react-character-counter'

state = {
  name: ''
}

<CharacterCounter value={this.state.name} maxLength={120} >
  <input type='text' maxLength={120}  value={this.state.name}>
</CharacterCounter>

```

#### Accepted Props are below

```
{
  value: String, Required
  maxLength: Number, Required
  wrapperStyle: Object, Optional
  characterCounterStyle: Object, Optional
  overrideStyle: Boolean, Optional
}
```

#### Adding more styles can be done as

```
<CharacterCounter
  value={this.state.name}
  maxLength={120}
  wrapperStyle={{position: 'relative'}}
  characterCounterStyle={{color: 'orange'}}
>
  <input type='text' maxLength={120}  value={this.state.name}>
</CharacterCounter>
```

#### Overriding existing Styling and positioning all together can be done as

```
<CharacterCounter
  value={this.state.name}
  maxLength={120}
  wrapperStyle={{position: 'relative'}}
  characterCounterStyle={{
    position: "absolute",
    fontSize: "12px",
    fontWeight: "600",
    top: "14px",
    right: "0px"
  }}
>
  <input type='text' maxLength={120}  value={this.state.name}>
</CharacterCounter>
```

#### Default Styling is listed below

##### Wrapper Style

```
{
  position: "relative"
}
```

##### Character Counter Style

```
{
  position: "absolute",
  fontSize: "12px",
  fontWeight: "600"
}
```
