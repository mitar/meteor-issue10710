import {BrowserPolicy} from 'meteor/browser-policy';
import {WebAppInternals} from 'meteor/webapp';

BrowserPolicy.content.disallowInlineScripts();
WebAppInternals.enableSubresourceIntegrity();
