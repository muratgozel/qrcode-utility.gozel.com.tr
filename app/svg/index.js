const {Component} = require('@frondjs/frond')

new Component({
  "id": "svg-burger-menu",
  "view": {
    "svg": {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "children": [
        {
          "path": {
            "d": "M7.758,0h0A7.759,7.759,0,0,0,0,7.758H0A1.472,1.472,0,0,0,1.472,9.231H7.758A1.472,1.472,0,0,0,9.231,7.758V1.472A1.472,1.472,0,0,0,7.758,0Z"
          }
        },
        {
          "path": {
            "d": "M12.242,0h0a1.472,1.472,0,0,0-1.473,1.472V7.758a1.472,1.472,0,0,0,1.473,1.473h6.286A1.472,1.472,0,0,0,20,7.758h0A7.759,7.759,0,0,0,12.242,0Z"
          }
        },
        {
          "path": {
            "d": "M7.758,10.769H1.472A1.472,1.472,0,0,0,0,12.242H0A7.758,7.758,0,0,0,7.758,20h0a1.472,1.472,0,0,0,1.473-1.472V12.242A1.472,1.472,0,0,0,7.758,10.769Z"
          }
        },
        {
          "path": {
            "d": "M18.528,10.769H12.242a1.472,1.472,0,0,0-1.473,1.473v6.286A1.472,1.472,0,0,0,12.242,20h0A7.758,7.758,0,0,0,20,12.242h0A1.472,1.472,0,0,0,18.528,10.769Z"
          }
        }
      ]
    }
  }
})


new Component({
  "id": "svg-close",
  "view": {
    "svg": {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 12 12",
      "width": "12",
      "height": "12",
      "children": [
        {
          "path": {
            "d": "M7.425,6,11.7,10.274a.994.994,0,0,1,0,1.425h0a.994.994,0,0,1-1.425,0L6,7.425,1.726,11.7A.994.994,0,0,1,.3,11.7a.994.994,0,0,1,0-1.425L4.575,6,.3,1.726A.994.994,0,0,1,.3.3.994.994,0,0,1,1.726.3L6,4.575,10.274.3A.994.994,0,0,1,11.7.3a.994.994,0,0,1,0,1.425L7.425,6Z"
          }
        }
      ]
    }
  }
})


new Component({
  "id": "svg-github-mark",
  "view": {
    "svg": {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 32.579 31.775",
      "children": [
        {
          "g": {
            "id": "Layer_2",
            "data-name": "Layer 2",
            "children": [
              {
                "g": {
                  "id": "Layer_1-2",
                  "data-name": "Layer 1",
                  "children": [
                    {
                      "path": {
                        "d": "M16.288,0a16.291,16.291,0,0,0-5.147,31.747c.814.149,1.111-.354,1.111-.786,0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.315,4.315,0,0,0-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.42,3.42,0,0,1,2.5,1.679,3.47,3.47,0,0,0,4.741,1.354,3.482,3.482,0,0,1,1.034-2.178C9.7,23.078,5.9,21.68,5.9,15.438a6.3,6.3,0,0,1,1.677-4.371,5.863,5.863,0,0,1,.16-4.311s1.368-.438,4.479,1.67a15.424,15.424,0,0,1,8.157,0c3.109-2.108,4.475-1.67,4.475-1.67a5.857,5.857,0,0,1,.162,4.311,6.286,6.286,0,0,1,1.674,4.371c0,6.258-3.808,7.635-7.437,8.038a3.888,3.888,0,0,1,1.106,3.017c0,2.177-.02,3.934-.02,4.468,0,.436.293.943,1.12.784A16.292,16.292,0,0,0,16.288,0Z",
                        "fill": "#191717",
                        "fill-rule": "evenodd"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
})
