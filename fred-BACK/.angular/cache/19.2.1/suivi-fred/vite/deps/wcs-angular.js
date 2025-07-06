import {
  NG_VALUE_ACCESSOR
} from "./chunk-MYNHXVUT.js";
import "./chunk-56G5WTQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  NgModule,
  NgZone,
  fromEvent,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-7FO2VPY5.js";
import {
  __decorate
} from "./chunk-4JLIZ3DY.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-angular/fesm2020/wcs-angular.mjs
var _c0 = ["*"];
var SelectValueAccessor = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  // tslint:disable-next-line:typedef
  writeValue(value) {
    this.el.nativeElement.value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleInputEvent(value) {
    this.onChange(value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
};
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
SelectValueAccessor.ɵdir = ɵɵdefineDirective({
  type: SelectValueAccessor,
  selectors: [["wcs-select"]],
  hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsChange", function SelectValueAccessor_wcsChange_HostBindingHandler($event) {
        return ctx._handleInputEvent($event.detail.value);
      })("wcsBlur", function SelectValueAccessor_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectValueAccessor,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessor, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessor,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["wcsChange", ["$event.detail.value"]]
    }],
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }]
  });
})();
var RadioGroupValueAccessor = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.el.nativeElement.addEventListener("wcsChange", (event) => {
      this.onChange(event.detail.value);
    });
  }
  writeValue(value) {
    this.value = value;
    this.el.nativeElement.value = this.value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleBlurEvent(ev) {
    if (!this.el.nativeElement.contains(ev.detail.relatedTarget)) {
      this.onTouched();
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
RadioGroupValueAccessor.ɵfac = function RadioGroupValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RadioGroupValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
RadioGroupValueAccessor.ɵdir = ɵɵdefineDirective({
  type: RadioGroupValueAccessor,
  selectors: [["wcs-radio-group"]],
  hostBindings: function RadioGroupValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function RadioGroupValueAccessor_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioGroupValueAccessor,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioGroupValueAccessor, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "wcs-radio-group",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RadioGroupValueAccessor,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event"]]
    }]
  });
})();
var CheckboxValueAccessorDirective = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.el.nativeElement.addEventListener("wcsChange", (event) => {
      this.onChange(event.detail.checked);
    });
  }
  // tslint:disable-next-line:typedef
  writeValue(checked) {
    this.checked = checked;
    if (checked) {
      this.el.nativeElement.setAttribute("checked", this.checked);
    } else {
      this.el.nativeElement.removeAttribute("checked");
    }
  }
  // tslint:disable-next-line:typedef
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
};
CheckboxValueAccessorDirective.ɵfac = function CheckboxValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckboxValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
CheckboxValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: CheckboxValueAccessorDirective,
  selectors: [["wcs-checkbox"]],
  hostBindings: function CheckboxValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function CheckboxValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-checkbox",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CheckboxValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }]
  });
})();
var SwitchValueAccessorDirective = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.el.nativeElement.addEventListener("wcsChange", (event) => {
      this.onChange(event.detail.checked);
    });
  }
  // tslint:disable-next-line:typedef
  writeValue(checked) {
    this.checked = checked;
    if (checked) {
      this.el.nativeElement.setAttribute("checked", this.checked);
    } else {
      this.el.nativeElement.removeAttribute("checked");
    }
  }
  // tslint:disable-next-line:typedef
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
};
SwitchValueAccessorDirective.ɵfac = function SwitchValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SwitchValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
SwitchValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: SwitchValueAccessorDirective,
  selectors: [["wcs-switch"]],
  hostBindings: function SwitchValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function SwitchValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SwitchValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-switch",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SwitchValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }]
  });
})();
var InputValueAccessorDirective = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  // tslint:disable-next-line:typedef
  writeValue(value) {
    this.el.nativeElement.value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
  _handleInputEvent(el) {
    if (el === this.el.nativeElement) {
      this.onChange(el.value);
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
InputValueAccessorDirective.ɵfac = function InputValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
InputValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: InputValueAccessorDirective,
  selectors: [["wcs-input"]],
  hostBindings: function InputValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function InputValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      })("wcsInput", function InputValueAccessorDirective_wcsInput_HostBindingHandler($event) {
        return ctx._handleInputEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-input",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: InputValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }],
    _handleInputEvent: [{
      type: HostListener,
      args: ["wcsInput", ["$event.target"]]
    }]
  });
})();
var TextareaValueAccessorDirective = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  // tslint:disable-next-line:typedef
  writeValue(value) {
    this.el.nativeElement.value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
  _handleInputEvent(el) {
    if (el === this.el.nativeElement) {
      this.onChange(el.value);
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
TextareaValueAccessorDirective.ɵfac = function TextareaValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextareaValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
TextareaValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: TextareaValueAccessorDirective,
  selectors: [["wcs-textarea"]],
  hostBindings: function TextareaValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function TextareaValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      })("wcsInput", function TextareaValueAccessorDirective_wcsInput_HostBindingHandler($event) {
        return ctx._handleInputEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextareaValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-textarea",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextareaValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }],
    _handleInputEvent: [{
      type: HostListener,
      args: ["wcsInput", ["$event.target"]]
    }]
  });
})();
var CounterValueAccessorDirective = class {
  constructor(injector, el) {
    this.injector = injector;
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.el.nativeElement.addEventListener("wcsChange", (event) => {
      this.onChange(event.detail.value);
    });
  }
  writeValue(value) {
    this.value = value;
    this.el.nativeElement.value = this.value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
CounterValueAccessorDirective.ɵfac = function CounterValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CounterValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
CounterValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: CounterValueAccessorDirective,
  selectors: [["wcs-counter"]],
  hostBindings: function CounterValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsBlur", function CounterValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CounterValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-counter",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CounterValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }]
  });
})();
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var WcsAccordion = class WcsAccordion2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsAccordion.ɵfac = function WcsAccordion_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsAccordion)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsAccordion.ɵcmp = ɵɵdefineComponent({
  type: WcsAccordion,
  selectors: [["wcs-accordion"]],
  inputs: {
    groupContentWithHeader: "groupContentWithHeader",
    hideActionText: "hideActionText",
    highlight: "highlight"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsAccordion_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsAccordion = __decorate([ProxyCmp({
  inputs: ["groupContentWithHeader", "hideActionText", "highlight"]
})], WcsAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsAccordion, [{
    type: Component,
    args: [{
      selector: "wcs-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["groupContentWithHeader", "hideActionText", "highlight"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsAccordionContent = class WcsAccordionContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsAccordionContent.ɵfac = function WcsAccordionContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsAccordionContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsAccordionContent.ɵcmp = ɵɵdefineComponent({
  type: WcsAccordionContent,
  selectors: [["wcs-accordion-content"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsAccordionContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsAccordionContent = __decorate([ProxyCmp({})], WcsAccordionContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsAccordionContent, [{
    type: Component,
    args: [{
      selector: "wcs-accordion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsAccordionHeader = class WcsAccordionHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsAccordionHeader.ɵfac = function WcsAccordionHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsAccordionHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsAccordionHeader.ɵcmp = ɵɵdefineComponent({
  type: WcsAccordionHeader,
  selectors: [["wcs-accordion-header"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsAccordionHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsAccordionHeader = __decorate([ProxyCmp({})], WcsAccordionHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsAccordionHeader, [{
    type: Component,
    args: [{
      selector: "wcs-accordion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsAccordionPanel = class WcsAccordionPanel2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsOpenChange"]);
  }
};
WcsAccordionPanel.ɵfac = function WcsAccordionPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsAccordionPanel)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsAccordionPanel.ɵcmp = ɵɵdefineComponent({
  type: WcsAccordionPanel,
  selectors: [["wcs-accordion-panel"]],
  inputs: {
    groupContentWithHeader: "groupContentWithHeader",
    hideActionText: "hideActionText",
    highlight: "highlight",
    open: "open"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsAccordionPanel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsAccordionPanel = __decorate([ProxyCmp({
  inputs: ["groupContentWithHeader", "hideActionText", "highlight", "open"],
  methods: ["setAriaAttribute", "close"]
})], WcsAccordionPanel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsAccordionPanel, [{
    type: Component,
    args: [{
      selector: "wcs-accordion-panel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["groupContentWithHeader", "hideActionText", "highlight", "open"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsActionBar = class WcsActionBar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsActionBar.ɵfac = function WcsActionBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsActionBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsActionBar.ɵcmp = ɵɵdefineComponent({
  type: WcsActionBar,
  selectors: [["wcs-action-bar"]],
  inputs: {
    gutter: "gutter"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsActionBar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsActionBar = __decorate([ProxyCmp({
  inputs: ["gutter"]
})], WcsActionBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsActionBar, [{
    type: Component,
    args: [{
      selector: "wcs-action-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["gutter"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsApp = class WcsApp2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsApp.ɵfac = function WcsApp_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsApp)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsApp.ɵcmp = ɵɵdefineComponent({
  type: WcsApp,
  selectors: [["wcs-app"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsApp_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsApp = __decorate([ProxyCmp({})], WcsApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsApp, [{
    type: Component,
    args: [{
      selector: "wcs-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsBadge = class WcsBadge2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsBadge.ɵfac = function WcsBadge_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsBadge)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsBadge.ɵcmp = ɵɵdefineComponent({
  type: WcsBadge,
  selectors: [["wcs-badge"]],
  inputs: {
    color: "color",
    shape: "shape",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsBadge_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsBadge = __decorate([ProxyCmp({
  inputs: ["color", "shape", "size"]
})], WcsBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsBadge, [{
    type: Component,
    args: [{
      selector: "wcs-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "shape", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsBreadcrumb = class WcsBreadcrumb2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsBreadcrumb.ɵfac = function WcsBreadcrumb_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsBreadcrumb)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsBreadcrumb.ɵcmp = ɵɵdefineComponent({
  type: WcsBreadcrumb,
  selectors: [["wcs-breadcrumb"]],
  inputs: {
    ariaLabelExpandButton: "ariaLabelExpandButton",
    itemsAfterCollapse: "itemsAfterCollapse",
    itemsBeforeCollapse: "itemsBeforeCollapse",
    maxItems: "maxItems"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsBreadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsBreadcrumb = __decorate([ProxyCmp({
  inputs: ["ariaLabelExpandButton", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems"],
  methods: ["setAriaAttribute"]
})], WcsBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsBreadcrumb, [{
    type: Component,
    args: [{
      selector: "wcs-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["ariaLabelExpandButton", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsBreadcrumbItem = class WcsBreadcrumbItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsBreadcrumbItem.ɵfac = function WcsBreadcrumbItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsBreadcrumbItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsBreadcrumbItem.ɵcmp = ɵɵdefineComponent({
  type: WcsBreadcrumbItem,
  selectors: [["wcs-breadcrumb-item"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsBreadcrumbItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsBreadcrumbItem = __decorate([ProxyCmp({})], WcsBreadcrumbItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsBreadcrumbItem, [{
    type: Component,
    args: [{
      selector: "wcs-breadcrumb-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsButton = class WcsButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsButton.ɵfac = function WcsButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsButton.ɵcmp = ɵɵdefineComponent({
  type: WcsButton,
  selectors: [["wcs-button"]],
  inputs: {
    disabled: "disabled",
    href: "href",
    loading: "loading",
    mode: "mode",
    ripple: "ripple",
    shape: "shape",
    size: "size",
    target: "target",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsButton = __decorate([ProxyCmp({
  inputs: ["disabled", "href", "loading", "mode", "ripple", "shape", "size", "target", "type"],
  methods: ["setAriaAttribute"]
})], WcsButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsButton, [{
    type: Component,
    args: [{
      selector: "wcs-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "href", "loading", "mode", "ripple", "shape", "size", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsCard = class WcsCard2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsCard.ɵfac = function WcsCard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsCard)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsCard.ɵcmp = ɵɵdefineComponent({
  type: WcsCard,
  selectors: [["wcs-card"]],
  inputs: {
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsCard_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsCard = __decorate([ProxyCmp({
  inputs: ["mode"]
})], WcsCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsCard, [{
    type: Component,
    args: [{
      selector: "wcs-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsCardBody = class WcsCardBody2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsCardBody.ɵfac = function WcsCardBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsCardBody)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsCardBody.ɵcmp = ɵɵdefineComponent({
  type: WcsCardBody,
  selectors: [["wcs-card-body"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsCardBody_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsCardBody = __decorate([ProxyCmp({})], WcsCardBody);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsCardBody, [{
    type: Component,
    args: [{
      selector: "wcs-card-body",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsCheckbox = class WcsCheckbox2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange", "wcsFocus", "wcsBlur"]);
  }
};
WcsCheckbox.ɵfac = function WcsCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsCheckbox.ɵcmp = ɵɵdefineComponent({
  type: WcsCheckbox,
  selectors: [["wcs-checkbox"]],
  inputs: {
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate",
    labelAlignment: "labelAlignment",
    name: "name"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsCheckbox = __decorate([ProxyCmp({
  inputs: ["checked", "disabled", "indeterminate", "labelAlignment", "name"],
  methods: ["setAriaAttribute", "getLabel"]
})], WcsCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsCheckbox, [{
    type: Component,
    args: [{
      selector: "wcs-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["checked", "disabled", "indeterminate", "labelAlignment", "name"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsComNav = class WcsComNav2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsComNav.ɵfac = function WcsComNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsComNav)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsComNav.ɵcmp = ɵɵdefineComponent({
  type: WcsComNav,
  selectors: [["wcs-com-nav"]],
  inputs: {
    appName: "appName"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsComNav_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsComNav = __decorate([ProxyCmp({
  inputs: ["appName"],
  methods: ["setAriaAttribute"]
})], WcsComNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsComNav, [{
    type: Component,
    args: [{
      selector: "wcs-com-nav",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["appName"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsComNavCategory = class WcsComNavCategory2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsCategoryOpened"]);
  }
};
WcsComNavCategory.ɵfac = function WcsComNavCategory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsComNavCategory)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsComNavCategory.ɵcmp = ɵɵdefineComponent({
  type: WcsComNavCategory,
  selectors: [["wcs-com-nav-category"]],
  inputs: {
    label: "label"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsComNavCategory_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsComNavCategory = __decorate([ProxyCmp({
  inputs: ["label"],
  methods: ["setAriaAttribute", "close", "open"]
})], WcsComNavCategory);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsComNavCategory, [{
    type: Component,
    args: [{
      selector: "wcs-com-nav-category",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["label"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsComNavItem = class WcsComNavItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsClickOnFinalAction"]);
  }
};
WcsComNavItem.ɵfac = function WcsComNavItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsComNavItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsComNavItem.ɵcmp = ɵɵdefineComponent({
  type: WcsComNavItem,
  selectors: [["wcs-com-nav-item"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsComNavItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsComNavItem = __decorate([ProxyCmp({})], WcsComNavItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsComNavItem, [{
    type: Component,
    args: [{
      selector: "wcs-com-nav-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsComNavSubmenu = class WcsComNavSubmenu2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsSubmenuOpened"]);
  }
};
WcsComNavSubmenu.ɵfac = function WcsComNavSubmenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsComNavSubmenu)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsComNavSubmenu.ɵcmp = ɵɵdefineComponent({
  type: WcsComNavSubmenu,
  selectors: [["wcs-com-nav-submenu"]],
  inputs: {
    label: "label",
    panelDescription: "panelDescription",
    panelTitle: "panelTitle"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsComNavSubmenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsComNavSubmenu = __decorate([ProxyCmp({
  inputs: ["label", "panelDescription", "panelTitle"],
  methods: ["setAriaAttribute", "close", "open"]
})], WcsComNavSubmenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsComNavSubmenu, [{
    type: Component,
    args: [{
      selector: "wcs-com-nav-submenu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["label", "panelDescription", "panelTitle"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsCounter = class WcsCounter2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange", "wcsBlur"]);
  }
};
WcsCounter.ɵfac = function WcsCounter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsCounter)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsCounter.ɵcmp = ɵɵdefineComponent({
  type: WcsCounter,
  selectors: [["wcs-counter"]],
  inputs: {
    disabled: "disabled",
    label: "label",
    max: "max",
    min: "min",
    size: "size",
    step: "step",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsCounter_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsCounter = __decorate([ProxyCmp({
  inputs: ["disabled", "label", "max", "min", "size", "step", "value"],
  methods: ["setAriaAttribute"]
})], WcsCounter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsCounter, [{
    type: Component,
    args: [{
      selector: "wcs-counter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "label", "max", "min", "size", "step", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsDivider = class WcsDivider2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsDivider.ɵfac = function WcsDivider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsDivider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsDivider.ɵcmp = ɵɵdefineComponent({
  type: WcsDivider,
  selectors: [["wcs-divider"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsDivider_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsDivider = __decorate([ProxyCmp({})], WcsDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsDivider, [{
    type: Component,
    args: [{
      selector: "wcs-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsDropdown = class WcsDropdown2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsDropdown.ɵfac = function WcsDropdown_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsDropdown)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsDropdown.ɵcmp = ɵɵdefineComponent({
  type: WcsDropdown,
  selectors: [["wcs-dropdown"]],
  inputs: {
    disabled: "disabled",
    mode: "mode",
    noArrow: "noArrow",
    placement: "placement",
    shape: "shape",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsDropdown_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsDropdown = __decorate([ProxyCmp({
  inputs: ["disabled", "mode", "noArrow", "placement", "shape", "size"],
  methods: ["setAriaAttribute"]
})], WcsDropdown);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsDropdown, [{
    type: Component,
    args: [{
      selector: "wcs-dropdown",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "noArrow", "placement", "shape", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsDropdownDivider = class WcsDropdownDivider2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsDropdownDivider.ɵfac = function WcsDropdownDivider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsDropdownDivider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsDropdownDivider.ɵcmp = ɵɵdefineComponent({
  type: WcsDropdownDivider,
  selectors: [["wcs-dropdown-divider"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsDropdownDivider_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsDropdownDivider = __decorate([ProxyCmp({})], WcsDropdownDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsDropdownDivider, [{
    type: Component,
    args: [{
      selector: "wcs-dropdown-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsDropdownHeader = class WcsDropdownHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsDropdownHeader.ɵfac = function WcsDropdownHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsDropdownHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsDropdownHeader.ɵcmp = ɵɵdefineComponent({
  type: WcsDropdownHeader,
  selectors: [["wcs-dropdown-header"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsDropdownHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsDropdownHeader = __decorate([ProxyCmp({})], WcsDropdownHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsDropdownHeader, [{
    type: Component,
    args: [{
      selector: "wcs-dropdown-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsDropdownItem = class WcsDropdownItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsDropdownItemClick"]);
  }
};
WcsDropdownItem.ɵfac = function WcsDropdownItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsDropdownItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsDropdownItem.ɵcmp = ɵɵdefineComponent({
  type: WcsDropdownItem,
  selectors: [["wcs-dropdown-item"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsDropdownItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsDropdownItem = __decorate([ProxyCmp({})], WcsDropdownItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsDropdownItem, [{
    type: Component,
    args: [{
      selector: "wcs-dropdown-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsEditableField = class WcsEditableField2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange"]);
  }
};
WcsEditableField.ɵfac = function WcsEditableField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsEditableField)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsEditableField.ɵcmp = ɵɵdefineComponent({
  type: WcsEditableField,
  selectors: [["wcs-editable-field"]],
  inputs: {
    errorMsg: "errorMsg",
    formatFn: "formatFn",
    label: "label",
    readonly: "readonly",
    size: "size",
    type: "type",
    validateFn: "validateFn",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsEditableField_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsEditableField = __decorate([ProxyCmp({
  inputs: ["errorMsg", "formatFn", "label", "readonly", "size", "type", "validateFn", "value"]
})], WcsEditableField);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsEditableField, [{
    type: Component,
    args: [{
      selector: "wcs-editable-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["errorMsg", "formatFn", "label", "readonly", "size", "type", "validateFn", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsError = class WcsError2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsError.ɵfac = function WcsError_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsError)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsError.ɵcmp = ɵɵdefineComponent({
  type: WcsError,
  selectors: [["wcs-error"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsError_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsError = __decorate([ProxyCmp({})], WcsError);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsError, [{
    type: Component,
    args: [{
      selector: "wcs-error",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsField = class WcsField2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsField.ɵfac = function WcsField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsField)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsField.ɵcmp = ɵɵdefineComponent({
  type: WcsField,
  selectors: [["wcs-field"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsField_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsField = __decorate([ProxyCmp({})], WcsField);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsField, [{
    type: Component,
    args: [{
      selector: "wcs-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsFieldContent = class WcsFieldContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsFieldContent.ɵfac = function WcsFieldContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsFieldContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsFieldContent.ɵcmp = ɵɵdefineComponent({
  type: WcsFieldContent,
  selectors: [["wcs-field-content"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsFieldContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsFieldContent = __decorate([ProxyCmp({})], WcsFieldContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsFieldContent, [{
    type: Component,
    args: [{
      selector: "wcs-field-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsFieldLabel = class WcsFieldLabel2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsFieldLabel.ɵfac = function WcsFieldLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsFieldLabel)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsFieldLabel.ɵcmp = ɵɵdefineComponent({
  type: WcsFieldLabel,
  selectors: [["wcs-field-label"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsFieldLabel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsFieldLabel = __decorate([ProxyCmp({})], WcsFieldLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsFieldLabel, [{
    type: Component,
    args: [{
      selector: "wcs-field-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsFooter = class WcsFooter2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsFooter.ɵfac = function WcsFooter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsFooter)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsFooter.ɵcmp = ɵɵdefineComponent({
  type: WcsFooter,
  selectors: [["wcs-footer"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsFooter_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsFooter = __decorate([ProxyCmp({})], WcsFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsFooter, [{
    type: Component,
    args: [{
      selector: "wcs-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsFormField = class WcsFormField2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsFormField.ɵfac = function WcsFormField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsFormField)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsFormField.ɵcmp = ɵɵdefineComponent({
  type: WcsFormField,
  selectors: [["wcs-form-field"]],
  inputs: {
    isError: "isError"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsFormField_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsFormField = __decorate([ProxyCmp({
  inputs: ["isError"]
})], WcsFormField);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsFormField, [{
    type: Component,
    args: [{
      selector: "wcs-form-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isError"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGalactic = class WcsGalactic2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsGalactic.ɵfac = function WcsGalactic_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGalactic)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGalactic.ɵcmp = ɵɵdefineComponent({
  type: WcsGalactic,
  selectors: [["wcs-galactic"]],
  inputs: {
    text: "text"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGalactic_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGalactic = __decorate([ProxyCmp({
  inputs: ["text"]
})], WcsGalactic);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGalactic, [{
    type: Component,
    args: [{
      selector: "wcs-galactic",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["text"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGalacticMenu = class WcsGalacticMenu2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsGalacticMenu.ɵfac = function WcsGalacticMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGalacticMenu)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGalacticMenu.ɵcmp = ɵɵdefineComponent({
  type: WcsGalacticMenu,
  selectors: [["wcs-galactic-menu"]],
  inputs: {
    text: "text"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGalacticMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGalacticMenu = __decorate([ProxyCmp({
  inputs: ["text"],
  methods: ["setAriaAttribute"]
})], WcsGalacticMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGalacticMenu, [{
    type: Component,
    args: [{
      selector: "wcs-galactic-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["text"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGrid = class WcsGrid2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsGridSelectionChange", "wcsGridAllSelectionChange", "wcsFocus", "wcsBlur"]);
  }
};
WcsGrid.ɵfac = function WcsGrid_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGrid)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGrid.ɵcmp = ɵɵdefineComponent({
  type: WcsGrid,
  selectors: [["wcs-grid"]],
  inputs: {
    data: "data",
    loading: "loading",
    rowCssPartsFn: "rowCssPartsFn",
    rowIdPath: "rowIdPath",
    selectedItems: "selectedItems",
    selectionConfig: "selectionConfig",
    serverMode: "serverMode",
    wcsGridPaginationId: "wcsGridPaginationId"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGrid_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGrid = __decorate([ProxyCmp({
  inputs: ["data", "loading", "rowCssPartsFn", "rowIdPath", "selectedItems", "selectionConfig", "serverMode", "wcsGridPaginationId"],
  methods: ["setAriaAttribute"]
})], WcsGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGrid, [{
    type: Component,
    args: [{
      selector: "wcs-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["data", "loading", "rowCssPartsFn", "rowIdPath", "selectedItems", "selectionConfig", "serverMode", "wcsGridPaginationId"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGridColumn = class WcsGridColumn2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsSortChange", "wcsHiddenChange"]);
  }
};
WcsGridColumn.ɵfac = function WcsGridColumn_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGridColumn)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGridColumn.ɵcmp = ɵɵdefineComponent({
  type: WcsGridColumn,
  selectors: [["wcs-grid-column"]],
  inputs: {
    customCells: "customCells",
    formatter: "formatter",
    hidden: "hidden",
    name: "name",
    path: "path",
    sort: "sort",
    sortFn: "sortFn",
    sortOrder: "sortOrder",
    width: "width"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGridColumn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGridColumn = __decorate([ProxyCmp({
  inputs: ["customCells", "formatter", "hidden", "name", "path", "sort", "sortFn", "sortOrder", "width"],
  methods: ["setAriaAttribute"]
})], WcsGridColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGridColumn, [{
    type: Component,
    args: [{
      selector: "wcs-grid-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["customCells", "formatter", "hidden", "name", "path", "sort", "sortFn", "sortOrder", "width"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGridCustomCell = class WcsGridCustomCell2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsGridCustomCell.ɵfac = function WcsGridCustomCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGridCustomCell)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGridCustomCell.ɵcmp = ɵɵdefineComponent({
  type: WcsGridCustomCell,
  selectors: [["wcs-grid-custom-cell"]],
  inputs: {
    columnId: "columnId",
    rowId: "rowId"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGridCustomCell_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGridCustomCell = __decorate([ProxyCmp({
  inputs: ["columnId", "rowId"]
})], WcsGridCustomCell);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGridCustomCell, [{
    type: Component,
    args: [{
      selector: "wcs-grid-custom-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["columnId", "rowId"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsGridPagination = class WcsGridPagination2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsGridPaginationChange"]);
  }
};
WcsGridPagination.ɵfac = function WcsGridPagination_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsGridPagination)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsGridPagination.ɵcmp = ɵɵdefineComponent({
  type: WcsGridPagination,
  selectors: [["wcs-grid-pagination"]],
  inputs: {
    availablePageSizes: "availablePageSizes",
    currentPage: "currentPage",
    itemsCount: "itemsCount",
    pageCount: "pageCount",
    pageSize: "pageSize"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsGridPagination_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsGridPagination = __decorate([ProxyCmp({
  inputs: ["availablePageSizes", "currentPage", "itemsCount", "pageCount", "pageSize"],
  methods: ["setAriaAttribute"]
})], WcsGridPagination);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsGridPagination, [{
    type: Component,
    args: [{
      selector: "wcs-grid-pagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["availablePageSizes", "currentPage", "itemsCount", "pageCount", "pageSize"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsHeader = class WcsHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsHeader.ɵfac = function WcsHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsHeader.ɵcmp = ɵɵdefineComponent({
  type: WcsHeader,
  selectors: [["wcs-header"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsHeader = __decorate([ProxyCmp({
  methods: ["setAriaAttribute"]
})], WcsHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsHeader, [{
    type: Component,
    args: [{
      selector: "wcs-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsHint = class WcsHint2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsHint.ɵfac = function WcsHint_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsHint)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsHint.ɵcmp = ɵɵdefineComponent({
  type: WcsHint,
  selectors: [["wcs-hint"]],
  inputs: {
    small: "small"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsHint_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsHint = __decorate([ProxyCmp({
  inputs: ["small"]
})], WcsHint);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsHint, [{
    type: Component,
    args: [{
      selector: "wcs-hint",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["small"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsHorizontalStepper = class WcsHorizontalStepper2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsHorizontalStepClick"]);
  }
};
WcsHorizontalStepper.ɵfac = function WcsHorizontalStepper_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsHorizontalStepper)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsHorizontalStepper.ɵcmp = ɵɵdefineComponent({
  type: WcsHorizontalStepper,
  selectors: [["wcs-horizontal-stepper"]],
  inputs: {
    checkOnComplete: "checkOnComplete",
    currentStep: "currentStep",
    mode: "mode",
    steps: "steps"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsHorizontalStepper_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsHorizontalStepper = __decorate([ProxyCmp({
  inputs: ["checkOnComplete", "currentStep", "mode", "steps"],
  methods: ["previous", "next"]
})], WcsHorizontalStepper);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsHorizontalStepper, [{
    type: Component,
    args: [{
      selector: "wcs-horizontal-stepper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["checkOnComplete", "currentStep", "mode", "steps"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsIcon = class WcsIcon2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsIcon.ɵfac = function WcsIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsIcon)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsIcon.ɵcmp = ɵɵdefineComponent({
  type: WcsIcon,
  selectors: [["wcs-icon"]],
  inputs: {
    icon: "icon",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsIcon = __decorate([ProxyCmp({
  inputs: ["icon", "size"],
  methods: ["setAriaAttribute"]
})], WcsIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsIcon, [{
    type: Component,
    args: [{
      selector: "wcs-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["icon", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsInput = class WcsInput2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsInput", "wcsChange", "wcsBlur", "wcsFocus"]);
  }
};
WcsInput.ɵfac = function WcsInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsInput.ɵcmp = ɵɵdefineComponent({
  type: WcsInput,
  selectors: [["wcs-input"]],
  inputs: {
    accept: "accept",
    autocapitalize: "autocapitalize",
    autocomplete: "autocomplete",
    autocorrect: "autocorrect",
    autofocus: "autofocus",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    hidePasswordButtonAriaLabel: "hidePasswordButtonAriaLabel",
    icon: "icon",
    inputmode: "inputmode",
    max: "max",
    maxlength: "maxlength",
    min: "min",
    minlength: "minlength",
    multiple: "multiple",
    name: "name",
    pattern: "pattern",
    placeholder: "placeholder",
    prefixLabel: "prefixLabel",
    readonly: "readonly",
    required: "required",
    showPasswordButtonAriaLabel: "showPasswordButtonAriaLabel",
    size: "size",
    spellcheck: "spellcheck",
    state: "state",
    step: "step",
    suffixLabel: "suffixLabel",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsInput_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsInput = __decorate([ProxyCmp({
  inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "debounce", "disabled", "enterkeyhint", "hidePasswordButtonAriaLabel", "icon", "inputmode", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "prefixLabel", "readonly", "required", "showPasswordButtonAriaLabel", "size", "spellcheck", "state", "step", "suffixLabel", "type", "value"],
  methods: ["getInputElement", "setAriaAttribute"]
})], WcsInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsInput, [{
    type: Component,
    args: [{
      selector: "wcs-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "debounce", "disabled", "enterkeyhint", "hidePasswordButtonAriaLabel", "icon", "inputmode", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "prefixLabel", "readonly", "required", "showPasswordButtonAriaLabel", "size", "spellcheck", "state", "step", "suffixLabel", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsLabel = class WcsLabel2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsLabel.ɵfac = function WcsLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsLabel)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsLabel.ɵcmp = ɵɵdefineComponent({
  type: WcsLabel,
  selectors: [["wcs-label"]],
  inputs: {
    required: "required"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsLabel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsLabel = __decorate([ProxyCmp({
  inputs: ["required"],
  methods: ["setAriaAttribute"]
})], WcsLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsLabel, [{
    type: Component,
    args: [{
      selector: "wcs-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["required"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsListItem = class WcsListItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsListItem.ɵfac = function WcsListItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsListItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsListItem.ɵcmp = ɵɵdefineComponent({
  type: WcsListItem,
  selectors: [["wcs-list-item"]],
  inputs: {
    activated: "activated"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsListItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsListItem = __decorate([ProxyCmp({
  inputs: ["activated"]
})], WcsListItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsListItem, [{
    type: Component,
    args: [{
      selector: "wcs-list-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsListItemProperties = class WcsListItemProperties2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsListItemProperties.ɵfac = function WcsListItemProperties_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsListItemProperties)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsListItemProperties.ɵcmp = ɵɵdefineComponent({
  type: WcsListItemProperties,
  selectors: [["wcs-list-item-properties"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsListItemProperties_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsListItemProperties = __decorate([ProxyCmp({})], WcsListItemProperties);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsListItemProperties, [{
    type: Component,
    args: [{
      selector: "wcs-list-item-properties",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsListItemProperty = class WcsListItemProperty2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsListItemProperty.ɵfac = function WcsListItemProperty_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsListItemProperty)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsListItemProperty.ɵcmp = ɵɵdefineComponent({
  type: WcsListItemProperty,
  selectors: [["wcs-list-item-property"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsListItemProperty_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsListItemProperty = __decorate([ProxyCmp({})], WcsListItemProperty);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsListItemProperty, [{
    type: Component,
    args: [{
      selector: "wcs-list-item-property",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsMatIcon = class WcsMatIcon2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsMatIcon.ɵfac = function WcsMatIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsMatIcon)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsMatIcon.ɵcmp = ɵɵdefineComponent({
  type: WcsMatIcon,
  selectors: [["wcs-mat-icon"]],
  inputs: {
    family: "family",
    icon: "icon",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsMatIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsMatIcon = __decorate([ProxyCmp({
  inputs: ["family", "icon", "size"],
  methods: ["setAriaAttribute"]
})], WcsMatIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsMatIcon, [{
    type: Component,
    args: [{
      selector: "wcs-mat-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["family", "icon", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsModal = class WcsModal2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsDialogClosed"]);
  }
};
WcsModal.ɵfac = function WcsModal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsModal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsModal.ɵcmp = ɵɵdefineComponent({
  type: WcsModal,
  selectors: [["wcs-modal"]],
  inputs: {
    closeButtonAriaLabel: "closeButtonAriaLabel",
    disableAutoFocus: "disableAutoFocus",
    hideActions: "hideActions",
    initialFocusElementId: "initialFocusElementId",
    modalTriggerControlsId: "modalTriggerControlsId",
    show: "show",
    showCloseButton: "showCloseButton",
    size: "size",
    withoutBackdrop: "withoutBackdrop"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsModal_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsModal = __decorate([ProxyCmp({
  inputs: ["closeButtonAriaLabel", "disableAutoFocus", "hideActions", "initialFocusElementId", "modalTriggerControlsId", "show", "showCloseButton", "size", "withoutBackdrop"],
  methods: ["setAriaAttribute"]
})], WcsModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsModal, [{
    type: Component,
    args: [{
      selector: "wcs-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeButtonAriaLabel", "disableAutoFocus", "hideActions", "initialFocusElementId", "modalTriggerControlsId", "show", "showCloseButton", "size", "withoutBackdrop"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsNativeSelect = class WcsNativeSelect2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsNativeSelect.ɵfac = function WcsNativeSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsNativeSelect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsNativeSelect.ɵcmp = ɵɵdefineComponent({
  type: WcsNativeSelect,
  selectors: [["wcs-native-select"]],
  inputs: {
    required: "required",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsNativeSelect_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsNativeSelect = __decorate([ProxyCmp({
  inputs: ["required", "size"],
  methods: ["setAriaAttribute", "updateStyles"]
})], WcsNativeSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsNativeSelect, [{
    type: Component,
    args: [{
      selector: "wcs-native-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["required", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsNav = class WcsNav2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsNav.ɵfac = function WcsNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsNav)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsNav.ɵcmp = ɵɵdefineComponent({
  type: WcsNav,
  selectors: [["wcs-nav"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsNav_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsNav = __decorate([ProxyCmp({
  methods: ["setAriaAttribute"]
})], WcsNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsNav, [{
    type: Component,
    args: [{
      selector: "wcs-nav",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsNavItem = class WcsNavItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsNavItem.ɵfac = function WcsNavItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsNavItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsNavItem.ɵcmp = ɵɵdefineComponent({
  type: WcsNavItem,
  selectors: [["wcs-nav-item"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsNavItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsNavItem = __decorate([ProxyCmp({})], WcsNavItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsNavItem, [{
    type: Component,
    args: [{
      selector: "wcs-nav-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsProgressBar = class WcsProgressBar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsProgressBar.ɵfac = function WcsProgressBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsProgressBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsProgressBar.ɵcmp = ɵɵdefineComponent({
  type: WcsProgressBar,
  selectors: [["wcs-progress-bar"]],
  inputs: {
    showLabel: "showLabel",
    size: "size",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsProgressBar = __decorate([ProxyCmp({
  inputs: ["showLabel", "size", "value"],
  methods: ["setAriaAttribute"]
})], WcsProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsProgressBar, [{
    type: Component,
    args: [{
      selector: "wcs-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["showLabel", "size", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsProgressRadial = class WcsProgressRadial2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsProgressRadial.ɵfac = function WcsProgressRadial_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsProgressRadial)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsProgressRadial.ɵcmp = ɵɵdefineComponent({
  type: WcsProgressRadial,
  selectors: [["wcs-progress-radial"]],
  inputs: {
    showLabel: "showLabel",
    size: "size",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsProgressRadial_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsProgressRadial = __decorate([ProxyCmp({
  inputs: ["showLabel", "size", "value"],
  methods: ["setAriaAttribute"]
})], WcsProgressRadial);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsProgressRadial, [{
    type: Component,
    args: [{
      selector: "wcs-progress-radial",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["showLabel", "size", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsRadio = class WcsRadio2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsRadioClick", "wcsBlur", "wcsFocus"]);
  }
};
WcsRadio.ɵfac = function WcsRadio_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsRadio)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsRadio.ɵcmp = ɵɵdefineComponent({
  type: WcsRadio,
  selectors: [["wcs-radio"]],
  inputs: {
    disabled: "disabled",
    label: "label",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsRadio_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsRadio = __decorate([ProxyCmp({
  inputs: ["disabled", "label", "value"],
  methods: ["setAriaAttribute"]
})], WcsRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsRadio, [{
    type: Component,
    args: [{
      selector: "wcs-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "label", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsRadioGroup = class WcsRadioGroup2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange"]);
  }
};
WcsRadioGroup.ɵfac = function WcsRadioGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsRadioGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsRadioGroup.ɵcmp = ɵɵdefineComponent({
  type: WcsRadioGroup,
  selectors: [["wcs-radio-group"]],
  inputs: {
    mode: "mode",
    name: "name",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsRadioGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsRadioGroup = __decorate([ProxyCmp({
  inputs: ["mode", "name", "value"],
  methods: ["setAriaAttribute"]
})], WcsRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsRadioGroup, [{
    type: Component,
    args: [{
      selector: "wcs-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSelect = class WcsSelect2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange", "wcsFocus", "wcsBlur", "wcsFilterChange"]);
  }
};
WcsSelect.ɵfac = function WcsSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSelect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSelect.ɵcmp = ɵɵdefineComponent({
  type: WcsSelect,
  selectors: [["wcs-select"]],
  inputs: {
    autocomplete: "autocomplete",
    chips: "chips",
    compareWith: "compareWith",
    disabled: "disabled",
    filterFn: "filterFn",
    multiple: "multiple",
    name: "name",
    placeholder: "placeholder",
    required: "required",
    serverMode: "serverMode",
    size: "size",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSelect_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSelect = __decorate([ProxyCmp({
  inputs: ["autocomplete", "chips", "compareWith", "disabled", "filterFn", "multiple", "name", "placeholder", "required", "serverMode", "size", "value"],
  methods: ["open", "close", "setAriaAttribute"]
})], WcsSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSelect, [{
    type: Component,
    args: [{
      selector: "wcs-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocomplete", "chips", "compareWith", "disabled", "filterFn", "multiple", "name", "placeholder", "required", "serverMode", "size", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSelectOption = class WcsSelectOption2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsSelectOptionClick"]);
  }
};
WcsSelectOption.ɵfac = function WcsSelectOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSelectOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSelectOption.ɵcmp = ɵɵdefineComponent({
  type: WcsSelectOption,
  selectors: [["wcs-select-option"]],
  inputs: {
    chipBackgroundColor: "chipBackgroundColor",
    chipColor: "chipColor",
    disabled: "disabled",
    selected: "selected",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSelectOption_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSelectOption = __decorate([ProxyCmp({
  inputs: ["chipBackgroundColor", "chipColor", "disabled", "selected", "value"]
})], WcsSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSelectOption, [{
    type: Component,
    args: [{
      selector: "wcs-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chipBackgroundColor", "chipColor", "disabled", "selected", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSkeletonCircle = class WcsSkeletonCircle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsSkeletonCircle.ɵfac = function WcsSkeletonCircle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSkeletonCircle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSkeletonCircle.ɵcmp = ɵɵdefineComponent({
  type: WcsSkeletonCircle,
  selectors: [["wcs-skeleton-circle"]],
  inputs: {
    animation: "animation",
    radius: "radius"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSkeletonCircle_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSkeletonCircle = __decorate([ProxyCmp({
  inputs: ["animation", "radius"]
})], WcsSkeletonCircle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSkeletonCircle, [{
    type: Component,
    args: [{
      selector: "wcs-skeleton-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animation", "radius"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSkeletonRectangle = class WcsSkeletonRectangle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsSkeletonRectangle.ɵfac = function WcsSkeletonRectangle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSkeletonRectangle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSkeletonRectangle.ɵcmp = ɵɵdefineComponent({
  type: WcsSkeletonRectangle,
  selectors: [["wcs-skeleton-rectangle"]],
  inputs: {
    animation: "animation",
    height: "height",
    rounded: "rounded",
    width: "width"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSkeletonRectangle_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSkeletonRectangle = __decorate([ProxyCmp({
  inputs: ["animation", "height", "rounded", "width"]
})], WcsSkeletonRectangle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSkeletonRectangle, [{
    type: Component,
    args: [{
      selector: "wcs-skeleton-rectangle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animation", "height", "rounded", "width"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSkeletonText = class WcsSkeletonText2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsSkeletonText.ɵfac = function WcsSkeletonText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSkeletonText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSkeletonText.ɵcmp = ɵɵdefineComponent({
  type: WcsSkeletonText,
  selectors: [["wcs-skeleton-text"]],
  inputs: {
    animation: "animation",
    height: "height"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSkeletonText_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSkeletonText = __decorate([ProxyCmp({
  inputs: ["animation", "height"]
})], WcsSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSkeletonText, [{
    type: Component,
    args: [{
      selector: "wcs-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animation", "height"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSpinner = class WcsSpinner2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsSpinner.ɵfac = function WcsSpinner_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSpinner)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSpinner.ɵcmp = ɵɵdefineComponent({
  type: WcsSpinner,
  selectors: [["wcs-spinner"]],
  inputs: {
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSpinner_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSpinner = __decorate([ProxyCmp({
  inputs: ["mode"]
})], WcsSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSpinner, [{
    type: Component,
    args: [{
      selector: "wcs-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsSwitch = class WcsSwitch2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange", "wcsFocus", "wcsBlur"]);
  }
};
WcsSwitch.ɵfac = function WcsSwitch_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsSwitch)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsSwitch.ɵcmp = ɵɵdefineComponent({
  type: WcsSwitch,
  selectors: [["wcs-switch"]],
  inputs: {
    checked: "checked",
    disabled: "disabled",
    labelAlignment: "labelAlignment",
    name: "name"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsSwitch_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsSwitch = __decorate([ProxyCmp({
  inputs: ["checked", "disabled", "labelAlignment", "name"],
  methods: ["setAriaAttribute", "getLabel"]
})], WcsSwitch);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsSwitch, [{
    type: Component,
    args: [{
      selector: "wcs-switch",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["checked", "disabled", "labelAlignment", "name"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsTab = class WcsTab2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["tabLoaded"]);
  }
};
WcsTab.ɵfac = function WcsTab_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsTab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsTab.ɵcmp = ɵɵdefineComponent({
  type: WcsTab,
  selectors: [["wcs-tab"]],
  inputs: {
    header: "header",
    itemKey: "itemKey"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsTab_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsTab = __decorate([ProxyCmp({
  inputs: ["header", "itemKey"]
})], WcsTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsTab, [{
    type: Component,
    args: [{
      selector: "wcs-tab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["header", "itemKey"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsTabs = class WcsTabs2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["tabChange"]);
  }
};
WcsTabs.ɵfac = function WcsTabs_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsTabs)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsTabs.ɵcmp = ɵɵdefineComponent({
  type: WcsTabs,
  selectors: [["wcs-tabs"]],
  inputs: {
    align: "align",
    description: "description",
    gutter: "gutter",
    headersOnly: "headersOnly",
    selectedIndex: "selectedIndex",
    selectedKey: "selectedKey"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsTabs_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsTabs = __decorate([ProxyCmp({
  inputs: ["align", "description", "gutter", "headersOnly", "selectedIndex", "selectedKey"],
  methods: ["setAriaAttribute"]
})], WcsTabs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsTabs, [{
    type: Component,
    args: [{
      selector: "wcs-tabs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["align", "description", "gutter", "headersOnly", "selectedIndex", "selectedKey"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsTextarea = class WcsTextarea2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["wcsChange", "wcsInput", "wcsBlur", "wcsFocus"]);
  }
};
WcsTextarea.ɵfac = function WcsTextarea_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsTextarea)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsTextarea.ɵcmp = ɵɵdefineComponent({
  type: WcsTextarea,
  selectors: [["wcs-textarea"]],
  inputs: {
    autoGrow: "autoGrow",
    autocapitalize: "autocapitalize",
    autofocus: "autofocus",
    cols: "cols",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    icon: "icon",
    inputmode: "inputmode",
    maxlength: "maxlength",
    minlength: "minlength",
    name: "name",
    placeholder: "placeholder",
    readonly: "readonly",
    required: "required",
    resize: "resize",
    rows: "rows",
    spellcheck: "spellcheck",
    state: "state",
    value: "value",
    wrap: "wrap"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsTextarea_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsTextarea = __decorate([ProxyCmp({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "cols", "debounce", "disabled", "enterkeyhint", "icon", "inputmode", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "resize", "rows", "spellcheck", "state", "value", "wrap"],
  methods: ["setAriaAttribute", "fitContent", "getInputElement"]
})], WcsTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsTextarea, [{
    type: Component,
    args: [{
      selector: "wcs-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "cols", "debounce", "disabled", "enterkeyhint", "icon", "inputmode", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "resize", "rows", "spellcheck", "state", "value", "wrap"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var WcsTooltip = class WcsTooltip2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
WcsTooltip.ɵfac = function WcsTooltip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsTooltip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
WcsTooltip.ɵcmp = ɵɵdefineComponent({
  type: WcsTooltip,
  selectors: [["wcs-tooltip"]],
  inputs: {
    appendTo: "appendTo",
    content: "content",
    delay: "delay",
    duration: "duration",
    for: "for",
    interactive: "interactive",
    maxWidth: "maxWidth",
    position: "position",
    theme: "theme",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WcsTooltip_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
WcsTooltip = __decorate([ProxyCmp({
  inputs: ["appendTo", "content", "delay", "duration", "for", "interactive", "maxWidth", "position", "theme", "trigger"],
  methods: ["hide", "show", "disable", "enable"]
})], WcsTooltip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsTooltip, [{
    type: Component,
    args: [{
      selector: "wcs-tooltip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["appendTo", "content", "delay", "duration", "for", "interactive", "maxWidth", "position", "theme", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var GridValueAccessorDirective = class {
  constructor(el) {
    this.el = el;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Write a new value to the element.
   * @param value the selected items
   */
  writeValue(value) {
    if (this.el.nativeElement.selectionConfig === "simple") {
      const simpleValue = Array.isArray(value) ? value[0] : value;
      this.el.nativeElement.selectedItems = simpleValue;
    } else if (this.el.nativeElement.selectionConfig === "multiple") {
      const values = Array.isArray(value) ? value : [value];
      this.el.nativeElement.selectedItems = values;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  _handleWcsGridSelectionChange(selectedItem) {
    this.onChange(selectedItem);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  _handleBlurEvent(el) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }
};
GridValueAccessorDirective.ɵfac = function GridValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridValueAccessorDirective)(ɵɵdirectiveInject(ElementRef));
};
GridValueAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: GridValueAccessorDirective,
  selectors: [["wcs-grid"]],
  hostBindings: function GridValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("wcsGridSelectionChange", function GridValueAccessorDirective_wcsGridSelectionChange_HostBindingHandler($event) {
        return ctx._handleWcsGridSelectionChange($event.detail.selectedRows);
      })("wcsBlur", function GridValueAccessorDirective_wcsBlur_HostBindingHandler($event) {
        return ctx._handleBlurEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: GridValueAccessorDirective,
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "wcs-grid",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: GridValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    _handleWcsGridSelectionChange: [{
      type: HostListener,
      args: ["wcsGridSelectionChange", ["$event.detail.selectedRows"]]
    }],
    _handleBlurEvent: [{
      type: HostListener,
      args: ["wcsBlur", ["$event.target"]]
    }]
  });
})();
var DECLARATIONS = [
  WcsActionBar,
  WcsAccordion,
  WcsAccordionContent,
  WcsAccordionHeader,
  WcsAccordionPanel,
  WcsApp,
  WcsBadge,
  WcsBreadcrumb,
  WcsBreadcrumbItem,
  WcsButton,
  WcsCard,
  WcsCardBody,
  WcsCheckbox,
  WcsComNav,
  WcsComNavItem,
  WcsComNavCategory,
  WcsComNavSubmenu,
  WcsCounter,
  WcsDivider,
  WcsDropdown,
  WcsDropdownDivider,
  WcsDropdownHeader,
  WcsDropdownItem,
  WcsEditableField,
  WcsError,
  WcsField,
  WcsFieldContent,
  WcsFieldLabel,
  WcsFooter,
  WcsFormField,
  WcsGalactic,
  WcsGalacticMenu,
  WcsGrid,
  WcsGridColumn,
  WcsGridCustomCell,
  WcsGridPagination,
  WcsHeader,
  WcsHint,
  WcsHorizontalStepper,
  WcsIcon,
  WcsInput,
  WcsLabel,
  WcsListItem,
  WcsListItemProperties,
  WcsListItemProperty,
  WcsMatIcon,
  WcsModal,
  WcsNav,
  WcsNavItem,
  WcsProgressBar,
  WcsProgressRadial,
  WcsRadio,
  WcsRadioGroup,
  WcsSelect,
  WcsSelectOption,
  WcsSkeletonCircle,
  WcsSkeletonRectangle,
  WcsSkeletonText,
  WcsSpinner,
  WcsSwitch,
  WcsTab,
  WcsTabs,
  WcsTextarea,
  WcsTooltip,
  WcsNativeSelect,
  // Value accessors
  InputValueAccessorDirective,
  TextareaValueAccessorDirective,
  SelectValueAccessor,
  RadioGroupValueAccessor,
  CheckboxValueAccessorDirective,
  SwitchValueAccessorDirective,
  CounterValueAccessorDirective,
  GridValueAccessorDirective
];
var WcsAngularModule = class {
};
WcsAngularModule.ɵfac = function WcsAngularModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WcsAngularModule)();
};
WcsAngularModule.ɵmod = ɵɵdefineNgModule({
  type: WcsAngularModule,
  declarations: [
    WcsActionBar,
    WcsAccordion,
    WcsAccordionContent,
    WcsAccordionHeader,
    WcsAccordionPanel,
    WcsApp,
    WcsBadge,
    WcsBreadcrumb,
    WcsBreadcrumbItem,
    WcsButton,
    WcsCard,
    WcsCardBody,
    WcsCheckbox,
    WcsComNav,
    WcsComNavItem,
    WcsComNavCategory,
    WcsComNavSubmenu,
    WcsCounter,
    WcsDivider,
    WcsDropdown,
    WcsDropdownDivider,
    WcsDropdownHeader,
    WcsDropdownItem,
    WcsEditableField,
    WcsError,
    WcsField,
    WcsFieldContent,
    WcsFieldLabel,
    WcsFooter,
    WcsFormField,
    WcsGalactic,
    WcsGalacticMenu,
    WcsGrid,
    WcsGridColumn,
    WcsGridCustomCell,
    WcsGridPagination,
    WcsHeader,
    WcsHint,
    WcsHorizontalStepper,
    WcsIcon,
    WcsInput,
    WcsLabel,
    WcsListItem,
    WcsListItemProperties,
    WcsListItemProperty,
    WcsMatIcon,
    WcsModal,
    WcsNav,
    WcsNavItem,
    WcsProgressBar,
    WcsProgressRadial,
    WcsRadio,
    WcsRadioGroup,
    WcsSelect,
    WcsSelectOption,
    WcsSkeletonCircle,
    WcsSkeletonRectangle,
    WcsSkeletonText,
    WcsSpinner,
    WcsSwitch,
    WcsTab,
    WcsTabs,
    WcsTextarea,
    WcsTooltip,
    WcsNativeSelect,
    // Value accessors
    InputValueAccessorDirective,
    TextareaValueAccessorDirective,
    SelectValueAccessor,
    RadioGroupValueAccessor,
    CheckboxValueAccessorDirective,
    SwitchValueAccessorDirective,
    CounterValueAccessorDirective,
    GridValueAccessorDirective
  ],
  exports: [
    WcsActionBar,
    WcsAccordion,
    WcsAccordionContent,
    WcsAccordionHeader,
    WcsAccordionPanel,
    WcsApp,
    WcsBadge,
    WcsBreadcrumb,
    WcsBreadcrumbItem,
    WcsButton,
    WcsCard,
    WcsCardBody,
    WcsCheckbox,
    WcsComNav,
    WcsComNavItem,
    WcsComNavCategory,
    WcsComNavSubmenu,
    WcsCounter,
    WcsDivider,
    WcsDropdown,
    WcsDropdownDivider,
    WcsDropdownHeader,
    WcsDropdownItem,
    WcsEditableField,
    WcsError,
    WcsField,
    WcsFieldContent,
    WcsFieldLabel,
    WcsFooter,
    WcsFormField,
    WcsGalactic,
    WcsGalacticMenu,
    WcsGrid,
    WcsGridColumn,
    WcsGridCustomCell,
    WcsGridPagination,
    WcsHeader,
    WcsHint,
    WcsHorizontalStepper,
    WcsIcon,
    WcsInput,
    WcsLabel,
    WcsListItem,
    WcsListItemProperties,
    WcsListItemProperty,
    WcsMatIcon,
    WcsModal,
    WcsNav,
    WcsNavItem,
    WcsProgressBar,
    WcsProgressRadial,
    WcsRadio,
    WcsRadioGroup,
    WcsSelect,
    WcsSelectOption,
    WcsSkeletonCircle,
    WcsSkeletonRectangle,
    WcsSkeletonText,
    WcsSpinner,
    WcsSwitch,
    WcsTab,
    WcsTabs,
    WcsTextarea,
    WcsTooltip,
    WcsNativeSelect,
    // Value accessors
    InputValueAccessorDirective,
    TextareaValueAccessorDirective,
    SelectValueAccessor,
    RadioGroupValueAccessor,
    CheckboxValueAccessorDirective,
    SwitchValueAccessorDirective,
    CounterValueAccessorDirective,
    GridValueAccessorDirective
  ]
});
WcsAngularModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WcsAngularModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      imports: [],
      exports: DECLARATIONS
    }]
  }], null, null);
})();
export {
  CheckboxValueAccessorDirective,
  CounterValueAccessorDirective,
  GridValueAccessorDirective,
  InputValueAccessorDirective,
  RadioGroupValueAccessor,
  SelectValueAccessor,
  SwitchValueAccessorDirective,
  TextareaValueAccessorDirective,
  WcsAccordion,
  WcsAccordionContent,
  WcsAccordionHeader,
  WcsAccordionPanel,
  WcsActionBar,
  WcsAngularModule,
  WcsApp,
  WcsBadge,
  WcsBreadcrumb,
  WcsBreadcrumbItem,
  WcsButton,
  WcsCard,
  WcsCardBody,
  WcsCheckbox,
  WcsComNav,
  WcsComNavCategory,
  WcsComNavItem,
  WcsComNavSubmenu,
  WcsCounter,
  WcsDivider,
  WcsDropdown,
  WcsDropdownDivider,
  WcsDropdownHeader,
  WcsDropdownItem,
  WcsEditableField,
  WcsError,
  WcsField,
  WcsFieldContent,
  WcsFieldLabel,
  WcsFooter,
  WcsFormField,
  WcsGalactic,
  WcsGalacticMenu,
  WcsGrid,
  WcsGridColumn,
  WcsGridCustomCell,
  WcsGridPagination,
  WcsHeader,
  WcsHint,
  WcsHorizontalStepper,
  WcsIcon,
  WcsInput,
  WcsLabel,
  WcsListItem,
  WcsListItemProperties,
  WcsListItemProperty,
  WcsMatIcon,
  WcsModal,
  WcsNativeSelect,
  WcsNav,
  WcsNavItem,
  WcsProgressBar,
  WcsProgressRadial,
  WcsRadio,
  WcsRadioGroup,
  WcsSelect,
  WcsSelectOption,
  WcsSkeletonCircle,
  WcsSkeletonRectangle,
  WcsSkeletonText,
  WcsSpinner,
  WcsSwitch,
  WcsTab,
  WcsTabs,
  WcsTextarea,
  WcsTooltip
};
//# sourceMappingURL=wcs-angular.js.map
