import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'

function LinkMe() {
  // const colors = {
  //   youtube: "red",
  //   twitter: "blue",
  //   github: "black",
  // }
  const data = {
    name: "@Kenechi__",
    profile: "kenechukwu.jpg",
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
        url: "https://zuri.team",
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
        name: "Background Check for Coders",
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
            style={{ padding: "1rem", color: "black", backgroundColor: "#EAECF0", border: "none", }}
            >
            {link.name}
            </Button>
            ))}
        </div>
      </div>

      <div className=' p-d-flex p-jc-center p-ai-center'>
        <div className='p-m-2'><img src={data.logo} alt="logo" style={{'height': '1rem', "color": "grey"}}/></div>
        <div><i class="pi pi-github"></i></div>
      </div>

      <div className='p-mt-6 p-d-flex p-jc-center p-ai-center' style={{'justify-content': 'space-around',}}>
        <div className='p-m-2'><img src={data.footc} alt="zuri int."/></div>
        <div><a href='https://background.zuri.team' style={{'text-decoration': 'none', "color": "grey"}}>HNG 9 Internship Frontend Task</a></div>
        <div><img src={data.foottl} alt="HNG9"/></div>
      </div>
    </div>
  );
}

export default LinkMe;
