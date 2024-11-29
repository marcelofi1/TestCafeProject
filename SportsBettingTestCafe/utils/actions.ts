import { Selector as NativeSelector, ClientFunction } from 'gherkin-testcafe';
import { Selector } from 'testcafe';

export class Actions {
  selector(selector, t) {
    return NativeSelector(selector).with({ boundTestRun: t });
  }

  getUrl() {
    const clientfunction = ClientFunction(() => document.location.href);

    return clientfunction();
  }

  async containText(selector, texto, t) {
    await t.expect(selector).contains(texto);
  }

  isVisible(selector, t) {
    return t.expect(selector.visible).ok();
  }

  click(selector, t) {
    return t.click(selector);
  }

  eql(selector, value, t) {
    return t.expect(selector).eql(value);
  }

  match(selector, value, t) {
    return t.expect(selector).match(value);
  }

  count(selector, value, t) {
    const osCount = Selector(selector).count;

    return t.expect(osCount).eql(parseInt(value, 10));
  }

  typeText(selector, value, t) {
    return t.typeText(selector, value);
  }

  isNotVisible(selector, t) {
    return t.expect(selector.visible).notOk();
  }
}
