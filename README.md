aphase
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/a-labo/aphase
[bd_travis_url]: http://travis-ci.org/a-labo/aphase
[bd_travis_shield_url]: http://img.shields.io/travis/a-labo/aphase.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/a-labo/aphase
[bd_travis_com_shield_url]: https://api.travis-ci.com/a-labo/aphase.svg?token=
[bd_license_url]: https://github.com/a-labo/aphase/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/a-labo/aphase
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/a-labo/aphase.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/a-labo/aphase.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/a-labo/aphase
[bd_gemnasium_shield_url]: https://gemnasium.com/a-labo/aphase.svg
[bd_npm_url]: http://www.npmjs.org/package/aphase
[bd_npm_shield_url]: http://img.shields.io/npm/v/aphase.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Phase runner

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install aphase --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const aphase = require('aphase')

function run (phaseName) {
  let phase = aphase(phaseName) // Define phase function
  // Run if phase name matches
  phase('foo:sayYeah!', () => Promise.resolve('yeah!'))
  phase('quz:sayYeah!', () => Promise.resolve('yeah!'))
}

run('foo:*,bar:*')

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/a-labo/aphase/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------



<!-- Links End -->
