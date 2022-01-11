(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{492:function(e,t,a){"use strict";a.r(t);var n=a(32),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[e._v("#")]),e._v(" Cheatsheet")]),e._v(" "),a("p",[e._v("This is a placeholder to work with the students and determine what they find valuable in this sheet.")]),e._v(" "),a("h2",{attrs:{id:"deleting-your-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-your-lab"}},[e._v("#")]),e._v(" Deleting your lab")]),e._v(" "),a("p",[a("strong",[e._v("WARNING")]),e._v(": You should ALWAYS validate the output before using "),a("code",[e._v("oc delete")]),e._v(". You can do that by replacing "),a("code",[e._v("oc delete")]),e._v(" with "),a("code",[e._v("oc get")]),e._v(", or if using with xargs prefix with "),a("code",[e._v("echo")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("WARNING")]),e._v(": Always double check, and triple check before running "),a("code",[e._v("oc delete")]),e._v("!!!")]),e._v(" "),a("p",[a("strong",[e._v("WARNING")]),e._v(": Be very careful when copying and pasting directly into a terminal!!!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# List/validate resources to be deleted by labels\noc -n [-tools] get all -l build=rocketchat-[username]\n\n# Delete by labels\noc -n [-tools] delete all -l build=rocketchat-[username]\n\n# List/validate resources to be deleted by get+grep+delete\noc -n [-dev] get all,pvc,secret,configmap -o name --no-headers | grep -i -F -e '-[username]'\n\n# Delete resources by using get+grep+delete\noc -n [-dev] get all -o name --no-headers | grep -i -F -e '-[username]' | xargs -I {} oc  -n [-dev] delete '{}'\n\n# Delete data/unrecoverable resources (not covered by 'all') by using get+grep+delete\noc -n [-dev] get pvc,secret,configmap -o name --no-headers | grep -i -F -e '-[username]' | xargs -I {} oc -n [-dev] delete '{}'\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);