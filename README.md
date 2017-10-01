# BGIter

## Assumptions

I chose to use `setTimeout` rather than `setInterval` for this task because `setTimeout` will at least be a minimum of `interval` distances apart, since one timeout doesn't get set until the other finishes. `setInterval` tries to schedule itself as close as possible to the interval times, but if other work is being done on the event loop, and the interval is short, there is a possibility for the intervals to pile up. In reality though, the amount of computation being done here is minimal, so it's probably irrelevant no matter which one I picked.

`BGIter` takes `interval` and `iterations` as arguments in it's constructor but defaults to `1000` and `10` if not present.

Assumption that whoever is importing the module is fine with es6, I didn't configure a commonjs or umd build, babel is only present here for testing.

## Install

(Use `npm` or `yarn` interchangeably)
```
yarn install
```

## Testing/Running

If it doesn't exist:
```
mkdir dist
```

then,
```
yarn run build
yarn run start
```

Open `localhost:8080` in the browser
