
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body, wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,28],"; }\nbody { min-height: 100%; }\n.",[1],"page-section-title { padding: 0 ",[0,30],"; }\n.",[1],"title { margin-left: ",[0,30],"; line-height: 1.5; color: #8f8f94; }\n.",[1],"container { padding-bottom: ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"container, .",[1],"canvasView { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"navigate { color: #007AFF; }\n.",[1],"canvas-bar { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"update-btn { margin-right: ",[0,30],"; }\n",],undefined,{path:"./pages/mpvue-echarts/mpvue-echarts.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/mpvue-echarts/mpvue-echarts.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      