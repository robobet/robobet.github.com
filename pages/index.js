if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5ca0bbfc6bba460528008a1a/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
}

const Index = () => (
  <div>
    <img src="/static/logo.jpg" width="400" />
      <style global jsx>{`
        html, body {
          background-color: #1a1a1a;
        }
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -200px 0 0 -200px;
        }
      `}</style>
  </div>
)

export default Index
