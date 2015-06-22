# awesome-streetview

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Returns a random `[ latitude, longitude ]` location that looks *darn good* in Google Street View.

PRs for more welcome, see [Contributing](#contributing).

![equirects](http://i.imgur.com/rm01Wrw.jpg)

## Example

```js
var streetview = require('awesome-streetview')

streetview()
//=> [60.070409, 6.542388999999957]

streetview()
//=> [33.839717, 135.774165]

streetview.locations
//=> [ ... [33.839717, 135.774165], ... ]
```

For example:

![latlng](http://i.imgur.com/UiEOXh7.png)

> <sup>[`[33.839717, 135.774165]` - view in google street view](https://www.google.ca/maps/@33.839717,135.774165,3a,75y,162h,90t/data=!3m8!1e1!3m6!1s8VzDsruxiVgAAAQfCLiNTg!2e0!3e11!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3D8VzDsruxiVgAAAQfCLiNTg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D162%26pitch%3D0!7i7168!8i3584)</sup>

The `lat,lng` can be extracted from the URL.

## Install

```sh
npm install awesome-streetview --save
```

## Usage

[![NPM](https://nodei.co/npm/awesome-streetview.png)](https://www.npmjs.com/package/awesome-streetview)

#### `streetview()`

Returns a random `[ latitude, longitude ]` pair.

#### `streetview.locations`

The array containing all `[ latitude, longitude ]` locations.

#### `array = require('awesome-streetview/locations.json')`

A JSON file containing the raw `[ latitude, longitude ]` pairs.

## Contributing

If you want to add more, submit a [pull request](https://github.com/Jam3/awesome-streetview/pulls) patching [locations.json](./locations.json), and include a screenshot of your beautiful `lat,lng` in Google Street View. The Evil Master Overlord will then decide whether it is worthy of being added.

## See Also

- [google-panorama-by-location](https://github.com/Jam3/google-panorama-by-location)
- [google-panorama-by-id](https://github.com/Jam3/google-panorama-by-id)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/awesome-streetview/blob/master/LICENSE.md) for details.
