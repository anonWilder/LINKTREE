import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'

function App() {
  // const colors = {
  //   youtube: "red",
  //   twitter: "blue",
  //   github: "black",
  // }
  const data = {
    name: "@Kenechi__",
    profile: "https://github.com/anonWilder.png",
    footr: "vector.png",
    foottl: "I4G.png",
    footc: "Vector (1).png",
    logo: "slack.png",
    links: [
      {
        name: "Twitter Link",
        url: "https://twitter.com/kenechi__/",
      },
      {
        name: "Zuri Team",
        url: "https://twitter.com/kenechi__/",
      },
      {
        name: "Zuri Books",
        url: "http://books.zuri.team",
      },
      {
        name: "Python Books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=<kenechukwu>",
      },
      {
        name: "Background Ceck for Coders",
        url: "https://background.zuri.team",
      },
      {
        name: "Design Books",
        url: "https://books.zuri.team/design-rules",
      }
    ]
  }
  return (
    <div className='p-m-4'>
      <div className='p-d-flex p-jc-center p-ai-center'>
        <Avatar
          image={data.profile}
          size="large"
          shape="circle"
        ></Avatar>
      </div>
      <div className='p-d-flex p-jc-center p-ai-center'>
      <h3 className='p-m-4'>{data.name}</h3>
      </div>
      <div className='p-d-flex p-jc-center p-ai-center'>
        <div className='p-d-flex p-flex-column ' style={{width: 60 + "%"}}>
          {data.links.map((link) => (
          <Button 
            className='p-m-2 p-button-secondary p-jc-center p-ai-center' 
            style={{ padding: "1rem", color: "black", backgroundColor: "#EAECF0", }}
            >
            {link.name}
            </Button>
            ))}
        </div>
      </div>
      <div className='p-d-flex p-jc-center p-ai-center'>
        <div className='p-m-2'><i class="pi pi-slack" style={{'color': 'red'}}></i></div>
        <div><i class="pi pi-github"></i></div>
      </div>
      <div className='m-8 p-d-flex p-jc-center p-ai-center'>
        <div><img src={data.footc}/></div>
        <div><a href='#'>HNG 9 Internship Frontend Task</a></div>
        <div><img src={data.foottl}/></div>
      </div>
    </div>
  );
}

export default App;
