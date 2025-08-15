import { browser } from '@wdio/globals';

class BaseUrl {
    open(path = '/') {
        return browser.url(path);
    }
}

export default BaseUrl;