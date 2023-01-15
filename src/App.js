import Item from './Item/Item'

const arr = [
{
  title: 'punk',
  text: 'Punk rock (also known as simply punk) is a music genre that emerged in the mid-1970s. Rooted in 1960s garage rock, punk bands rejected the perceived excesses of mainstream 1970s rock music. They typically produced short, fast-paced songs with hard-edged melodies and singing styles, stripped-down instrumentation, and often shouted political, anti-establishment lyrics. Punk embraces a DIY ethic; many bands self-produce recordings and distribute them through independent record labels.',
  img: './img/punk.jpg',
  bgColor: 'linear-gradient(269.85deg, #790000 0.13%, #1F1F1F 98.83%)',
  name: ['Joan Jett - Bad Reputation','Black Flag - Fix Me','Sex Pistols - Anarchy In The U.K.']
},

{
  title: 'grunge',
  text: 'Grunge (sometimes referred to as the Seattle sound) is an alternative rock genre and subculture that emerged during the mid-1980s in the American Pacific Northwest state of Washington, particularly in Seattle and nearby towns. Grunge fuses elements of punk rock and heavy metal, but without punks structure and speed. The genre featured the distorted electric guitar sound used in both genres, although some bands performed with more emphasis on one or the other. Like these genres, grunge typically uses electric guitar, bass guitar, drums and vocals. Grunge also incorporates influences from indie rock bands such as Sonic Youth.',
  img: './img/grunge.jpg',
  bgColor: 'linear-gradient(269.85deg, black 0.13%, #1F1F1F 98.83%)',
  name: ['Nirvana - In Bloom','Nirvana - Lithium','Nirvana - Dumb']
},

{
  title: 'lo-fi',
  text: 'Lo-fi (also typeset as lofi or low-fi; short for low fidelity) is a music or production quality in which elements usually regarded as imperfections in the context of a recording or performance are present, sometimes as a deliberate choice. The standards of sound quality (fidelity) and music production have evolved throughout the decades, meaning that some older examples of lo-fi may not have been originally recognized as such. Lo-fi began to be recognized as a style of popular music in the 1990s, when it became alternately referred to as DIY music (from "do it yourself").',
  img: './img/lo-fi.jpg',
  bgColor: "linear-gradient(269.85deg, #1a4653 0.13%, #1F1F1F 98.83%)",
  name: ['Catholic spray - Amazon Hunt','Le Tigre - Deceptacon','White Fence - A Pearl Is Not A Diamond']
},

{
  title: 'idm',
  text: 'Intelligent dance music (commonly abbreviated as IDM) is a style of electronic music originating in the early 1990s, defined by idiosyncratic experimentation rather than specific genre constraints. It emerged from the culture and sound palette of electronic and rave music styles such as ambient techno, acid house, Detroit techno and breakbeat; it has been regarded as better suited to home listening than dancing. ',
  img: './img/idm.jpg',
  bgColor: 'linear-gradient(269.85deg, #3f5070 0.13%, #1F1F1F 98.83%)',
  name: ['АЛ-90 - Space','АЛ-90 - 2020','Soft Blade - Yugoslavskiy Groove']
},

{
  title: 'disco',
  text: 'Disco is a genre of dance music and a subculture that emerged in the 1970s from the United States urban nightlife scene. Its sound is typified by four-on-the-floor beats, syncopated basslines, string sections, horns, electric piano, synthesizers, and electric rhythm guitars.',
  img: './img/disco.jpg',
  bgColor: 'linear-gradient(269.85deg, #312111 0.13%, #1F1F1F 98.83%)',
  name: ['Patrick Cowley - Do You Wanna Funk?','Purple Disco Machine - Menergy','Sylvester - I Wanna Take You Home']
},

{
  title: 'hardcore-punk',
  text: 'Hardcore punk (also known as simply hardcore) is a punk rock music genre and subculture that originated in the late 1970s. It is generally faster, harder, and more aggressive than other forms of punk rock. Its roots can be traced to earlier punk scenes in San Francisco and Southern California which arose as a reaction against the still predominant hippie cultural climate of the time. It was also inspired by Washington D.C. and New York punk rock and early proto-punk." ',
  img: './img/hardcore punk.jpg',
  bgColor: 'linear-gradient(269.85deg, black 0.13%, #1F1F1F 98.83%)',
  name: ['7Seconds - Skins, Brains & Guts','Cause For Alarm - United Races','Circle Jerks - Red Tape']
},

{
  title: 'gabber',
  text: 'Gabber music (Happy hardcore), also known as 4-beat or happycore, is a subgenre of hardcore dance music or "hard dance". It emerged both from the UK breakbeat hardcore rave scene, and Belgian, German and Dutch hardcore techno scenes in the early 1990s.',
  img: './img/gabber.jpg',
  bgColor: 'linear-gradient(269.85deg, rgb(129 0 83) 0.13%, rgb(31, 31, 31) 98.83%)',
  name: ['3 Step Ahead - Drop it','Rave Land - All Together','Micado - It`s Gonna Be a Fine Night']
},
];

function App() {
  const result = arr.map((item,index) => {
		return <Item 
      key= {index}
      title={item.title} 
      text={item.text} 
      img={item.img}
      bgColor={item.bgColor}
      name={item.name}/>
	});

  return <div className="container">
             <div className="content">
                <h1 className="content__logo">MUSIC</h1>
                <img className="content__cursor" src="./img/Group 1.svg" alt="/"></img>
                <p className="content__text">listen<br/> to your <br/>favorite <br/>tracks</p>
                <img className="content__cursor-two" src="./img/Group 2.svg" alt="/"></img>
                <p className="content__footer">ENJOY</p>
             </div>
             <div className="items">
                {result}
             </div>
          </div>
}

export default App;
