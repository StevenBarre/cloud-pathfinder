import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.af847d1c.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/aws_cost_calculator.fbfc49c8.png";
var _imports_1 = "/cloud-pathfinder/assets/billing.8b1f4ac7.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="billing" tabindex="-1"><a class="header-anchor" href="#billing" aria-hidden="true">#</a> Billing</h1><h2 id="billing-examples-t-shirt-estimate-scenario-1-small" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-1-small" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 1 - Small</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="text-align:left;">AWS Services</th><th style="text-align:center;">Metrics</th><th style="text-align:right;">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="text-align:left;">Traffic</td><td style="text-align:center;">25 Visitors a day</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">Amazon Simple Storage Service</td><td style="text-align:center;">80 GB</td><td style="text-align:right;">$ 2.00</td></tr><tr><td style="text-align:left;">Elastic Load Balancer</td><td style="text-align:center;">300KB/second/client connection</td><td style="text-align:right;">$ 25.00</td></tr><tr><td style="text-align:left;">Amazon DynamoDB</td><td style="text-align:center;">1 GB, 1 million requests</td><td style="text-align:right;">$ 4.00</td></tr><tr><td style="text-align:left;">Elastic Container Service - Fargate</td><td style="text-align:center;">1 container deployed twice, each 2 vCPU, 4GB</td><td style="text-align:right;">$ 48.39</td></tr><tr><td style="text-align:left;">Data Transfer Out</td><td style="text-align:center;">50 GB</td><td style="text-align:right;">$ 4.50</td></tr><tr><td style="text-align:left;">Amazon CloudWatch Logs</td><td style="text-align:center;">50 GB</td><td style="text-align:right;">$ 28.00</td></tr><tr><td style="text-align:left;">AWS SEA Services(*)</td><td style="text-align:center;">Amazon GuardDuty, AWS Config, KMS</td><td style="text-align:right;">$ 40.00</td></tr><tr><td style="text-align:left;">Estimated Monthly Total</td><td style="text-align:center;">--</td><td style="text-align:right;">$ 129.14</td></tr></tbody></table><ul><li>ALB: 1.08GB/hr, 25connections/sec, 2min duration,1 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-2-medium" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-2-medium" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 2 - Medium</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="text-align:left;">AWS Services</th><th style="text-align:center;">Metrics</th><th style="text-align:right;">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="text-align:left;">Traffic</td><td style="text-align:center;">250 Visitors a day</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">Amazon Simple Storage Service</td><td style="text-align:center;">800 GB</td><td style="text-align:right;">$ 20.00</td></tr><tr><td style="text-align:left;">Elastic Load Balancer</td><td style="text-align:center;">300KB/second/client connection</td><td style="text-align:right;">$ 88.00</td></tr><tr><td style="text-align:left;">Amazon DynamoDB</td><td style="text-align:center;">10 GB, 10 million requests</td><td style="text-align:right;">$ 18.00</td></tr><tr><td style="text-align:left;">Elastic Container Service - Fargate</td><td style="text-align:center;">3 container deployed twice, each 2 vCPU, 4GB</td><td style="text-align:right;">$ 145.16</td></tr><tr><td style="text-align:left;">Data Transfer Out</td><td style="text-align:center;">500 GB</td><td style="text-align:right;">$ 45.00</td></tr><tr><td style="text-align:left;">Amazon CloudWatch Logs</td><td style="text-align:center;">500 GB</td><td style="text-align:right;">$ 278.00</td></tr><tr><td style="text-align:left;">AWS SEA Services(*)</td><td style="text-align:center;">Amazon GuardDuty, AWS Config, KMS</td><td style="text-align:right;">$ 40.00</td></tr><tr><td style="text-align:left;">Estimated Monthly Total</td><td style="text-align:center;">--</td><td style="text-align:right;">$ 634.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-3-large" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-3-large" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 3 - Large</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="text-align:left;">AWS Services</th><th style="text-align:center;">Metrics</th><th style="text-align:right;">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="text-align:left;">Traffic</td><td style="text-align:center;">2500 Visitors a day</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">Amazon Simple Storage Service</td><td style="text-align:center;">8,000 GB</td><td style="text-align:right;">$ 200.00</td></tr><tr><td style="text-align:left;">Elastic Load Balancer</td><td style="text-align:center;">300KB/second/client connection</td><td style="text-align:right;">$ 712.00</td></tr><tr><td style="text-align:left;">Amazon DynamoDB</td><td style="text-align:center;">100 GB, 100 million requests</td><td style="text-align:right;">$ 178.00</td></tr><tr><td style="text-align:left;">Elastic Container Service - Fargate</td><td style="text-align:center;">3 container deployed twice, each 2 vCPU, 4GB</td><td style="text-align:right;">$ 145.16</td></tr><tr><td style="text-align:left;">Data Transfer Out</td><td style="text-align:center;">5000 GB</td><td style="text-align:right;">$ 450.00</td></tr><tr><td style="text-align:left;">Amazon CloudWatch Logs</td><td style="text-align:center;">5000 GB</td><td style="text-align:right;">$ 2,775.00</td></tr><tr><td style="text-align:left;">AWS SEA Services(*)</td><td style="text-align:center;">Amazon GuardDuty, AWS Config, KMS</td><td style="text-align:right;">$ 40.00</td></tr><tr><td style="text-align:left;">Estimated Monthly Total</td><td style="text-align:center;">--</td><td style="text-align:right;">$ 4,500.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="custom-cost-examples" tabindex="-1"><a class="header-anchor" href="#custom-cost-examples" aria-hidden="true">#</a> Custom Cost Examples ?</h2><p>Yes!</p><ul><li>AWS Pricing Calculator</li></ul><p><img src="' + _imports_0 + '" alt="Screen Shot of the AWS Price Calculator page"></p>', 17);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Use ");
const _hoisted_19 = {
  href: "https://calculator.aws",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("AWS Pricing Calculator");
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" for now");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "billing-process-example",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#billing-process-example",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Billing Process Example")
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "These are samples of periodic billing report files we generate for Ministry teams")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "sample monthly billing report"
  })
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_18,
        createBaseVNode("a", _hoisted_19, [
          _hoisted_20,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_21
      ])
    ]),
    _hoisted_22,
    _hoisted_23,
    _hoisted_24
  ], 64);
}
var _000600_billing_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _000600_billing_html as default };
