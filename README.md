# Amazon-Affiliate-Link-Generator-
Create an amazon affiliate link with a regular amazon link with this npm package
=======
# no-comma

amazonaffiliatelink is a javascript package where you can easily generate an amazon affiliate link with any amazon product URL!
## Installation


```bash
npm i ezamazonaffiliate
```

## Usage

```js
const amazonlink = require('ezamazonaffiliate')

const affiliatelink = amazonlink('https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/?_encoding=UTF8&pd_rd_w=h7hw5&pf_rd_p=396c0314-c1f6-41c2-b37b-91540c07423f&pf_rd_r=QZ9DCTCS6A0RBRMYQ44Q&pd_rd_r=cda5ad1d-0fbd-4ed0-ab67-c35b29c5ec68&pd_rd_wg=6mlX4&ref_=pd_gw_ci_mcx_mr_hp_atf_m', 'pickitly0b-20') // returns https://www.amazon.com/dp/B08BF4CZSV/?tag=pickitly0b-20

// Make sure to provide 2 arguments 

const link = amazonlink('amazonurl', 'trackingcode')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
>>>>>>> b8bb39b (full commit)
