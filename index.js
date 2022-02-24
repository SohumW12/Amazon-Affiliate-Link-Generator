function CreateURL(url, code){
    var ASINreg = new RegExp(/(?:\/)([A-Z0-9]{10})(?:$|\/|\?)/);
  if(!url || !code) {
    return console.error(`Please provide a url and your amazon tracking code. Example: CreateURL('amazon.com/productblahblah', 'pickitly0b-20')`)
  }
    var  cMatch = url.match(ASINreg);
    if(cMatch == null){
        return null;
    }
    var asin =  cMatch[1];
    var generated = `https://www.amazon.com/dp/${asin}/?tag=${code}`
  return generated
  }
  module.exports = CreateURL
