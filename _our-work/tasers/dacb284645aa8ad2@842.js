// https://observablehq.com/d/dacb284645aa8ad2@842
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["bibliography@4.json",new URL("./files/b0d89c81dd113e005cda69fd61fef3f9c801243e1a3149d2722378a49e6b3a175506eb2a4eaeb875c9225b46357ba17cfc0400cfb6431d2d79e72e647b716958",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
//   main.variable(observer()).define(["md"], function(md){return(
// md`# A Growing Threat to Life: Taser usage by Greater Manchester Police`
// )});
  main.variable(observer()).define(["md"], function(md){return(
md`
## About this report

Add in stuff about Observable

### Authors

This report was written by the Resistance Lab collective. More about us on our website: .

Please cite it as: Resistance Lab (2020). _A Growing Threat to Life: Taser Usage by Greater Manchester Police_. Manchester, UK. Retrieved from: https://permalinkurl.com

 * Lead author: Kerry Pimblott
 * Co-authors:
 * Graphs and diagrams: Kim Foale & Alice Kaerast
 * Infographics:

### License

Add appropriate license - CC BY NC?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

<img alt="A sketch of a protest outside Central Library in Manchester" src="/assets/images/posts/tasers/cover-protest.jpg" class="image image--full">

## Executive Summary

-	Human rights and medical experts have raised significant questions about the health and safety risks associated with tasers including the potential for cardiac complications leading to death.
-	In the UK, 18 people have died after a taser was discharged against them by police since 2003. Inquests have identified the use of a taser as a cause or contributing factor in the deaths of at least three individuals – Marc Cole, Jordon Begley and Andrew Pimblott.
-	Since 2015, the use of tasers has increased dramatically from 11,294 incidents in 2016 to 17,084 (2017/18) and 23,451 (2018/19). This amounts to a 108% increase in the use of tasers in the last three years.
-	Two-thirds of people tasered by police between 2010 and 2014 were identified as having a mental health condition.
-	GMP’s use of tasers is also rapidly increasing with a total of 1,442 incidents in 2018/19 up from 832 in 2017/18, 799 in 2016, and 779 in 2015. In the last financial year alone GMP’s use of tasers increased by 73%.
-	In total, GMP accounted for 6% of all incidents involving a taser in England and Wales in 2018/19.
-	In 2018/19, GMP reported a total of 6,171 use of force incidents of which 1,442 or 23% involved the use of tasers. This percentage vastly exceeded the national average of 5% as well as comparable forces such as the Metropolitan Police.
-	Though white people constituted a numerical majority, Black people in Greater Manchester were 10 times more likely to have a taser used against them than whites relatively to population size. This figure is higher than the national average.
-	In 2018/19, GMP reported a total of 1,345 use of force incidents against children under the age of 18 years of age. That same year, GMP reported a total of 14 use of force incidents against children under the age of 11 years. Of those incidents 8 or 57% involved the use of a taser, a percentage that vastly exceeded the national average.
-	In 2018/19, GMP reported that individuals perceived to have either physical or mental disabilities constituted 210 or 15% of all CED incidents.
-	In 2018/19, GMP reported a total of 1,757 use of force incidents involving people with mental and/or physical disabilities of which 210 or 12% resulted in the use of a CED. This figure is higher than the national average.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Introduction

> _Two coppers approached the gate and he [Jordan Begley] told them he had been accused of robbing a handbag. Next thing, armed police turned up and asked if they could have a word inside with him. Jordan thought he was going to discuss a handbag. But he never came back out… Jordan was carried out on a stretcher. And it sounds incredible, maybe it was shock but I had no clue he was fighting for his life. They took him away at 9:20pm. Jordan’s eyes were flickering and I told him I was going to get my shoes on and go to the hospital. I’ll never know if he heard me or not… A doctor took me into a room and told me he had died at 10pm. I will never be able to explain that feeling. The police took everything away from me, they didn’t give me the chance to say a proper goodbye to him. If he had heard my voice, would he have carried on fighting? I didn’t think I was going to be burying my son – it’s the hardest thing you ever have to do and I didn’t want to do it… My life just changed overnight._
>
> Dorothy Begley, mother of Jordan Begley. Gorton, Greater Manchester [(White, 2015)](#Whit15).


> _Michael [Gilchrist] did not die that day, but in many ways, he has been taken from us, his family. He is no longer able to communicate and he is largely verbally mute. Michael had a quality of life before he came into contact with Greater Manchester Police and he has suffered life-changing injuries as a result of that contact. All we have ever wanted is answers and meaningful engagement with the police. Instead, we have been made to feel sub-human. The officers on the scene did not see beyond the colour of Michael’s skin._
>
> Novlyn Graham, mother of Michael Gilchrist. Wythenshawe, Greater Manchester [(Boyle, 2019)](#Boyl19).

Dorothy Begley and Novlyn Graham, two mothers whose lives have been irrevocably transformed by police contact, raise an alarm about the growing threat to life presented by tasers in the hands of police. This is an alarm to which we should all be alert. Introduced in 2003 as a ‘less lethal’ alternative to firearms, tasers have since become the widely accessible weapon of choice deployed by officers. Official statistics published each year by the Home Office show a rapid escalation in police access to and usage of tasers with the weapon deployed in over twenty thousand incidents across England and Wales in 2018/19 alone [(UK Home Office, 2019)](#Ukho19). Against this backdrop, the pain expressed in the voices of these mothers bear witness to the devastating costs of police use of tasers.

<aside class="pullquote">Official statistics published each year by the Home Office show a rapid escalation in police access to and usage of tasers</aside>

Their sons, Jordan Begley and Michael Gilchrist, had a lot in common. Both came-of-age in the working-class community of Wythenshawe in South Manchester though Jordan would subsequently move with his mother to Gorton. Both had tight-knit families with whom they spent much of their time when not at work as a factory operative and gardener respectively. Both men suffered from underlying physical or mental health conditions: Michael was bipolar and on the autism spectrum while Jordan had complained of intermittent chest pain and blackouts in the weeks prior to his death. And, in incidents less than a year apart, these vulnerabilities - along with others of race and class - would be exploited as comorbidities in devastating encounters with Greater Manchester Police (GMP) officers armed with tasers [(White, 2015)](#Whit15).

Twenty-three-year-old Jordan died after being tasered, struck and restrained by GMP officers at his home in Gorton on July 10, 2013. Dorothy Begley had called 999 when her son became agitated by a neighbour’s accusation that he had stolen a handbag. On the emergency call, she told police that Jordan had threatened to get a knife because men were coming to the house. When police arrived six minutes later, Jordan was unarmed and calm according to his mother. As her account indicates, the officers asked if they could go inside and speak with Jordan about the allegations. Much of what transpired over the next few minutes remains unclear. Yet, what is uncontested is that the interaction culminated in PC Terence Donnelly firing a taser for nine seconds, almost twice the recommended limit, before other officers struck Jordan and tried to restrain him. In the aftermath, Jordan suffered cardiac arrest and died at Manchester Infirmary later that night ([White, 2015](#Whit15); [Bunyan, 2015](#Buny15); [Challand, 2015](#Chal15); [Kee Ling 2016](#Keel16)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`An investigation by the Independent Police Complaints Commission (IPCC, now known as the Independent Office for Police Conduct) cleared GMP of any responsibility in Jordan's death ([White, 2015](#Whit15)).  However, that initial investigation would come under judicial review after a June 2015 inquest ruled that Jordan had been ‘inappropriately and unreasonably’ tasered. The inquest - attended by Dorothy Begley, GMP officers and representatives of Taser International - provided an opportunity for the consideration of new evidence and witness testimony. One juror recalled being stunned by what appeared to be a 'total unnecessary use of force and harm'.

>_"The police turned up - a male and female. She stayed at the front and the male officer went in the house. After a minute or so he had calmed Jordan down and knew he wasn't a threat. He then radioed to control to say back-up wasn't needed, or something to that effect. As he calmed Jordan down the Taser Officer ran into the house and took over, shouting 'stay where you are'. Jordan began getting agitated again. He said 'take your hands out of your pockets'. Jordan had no pockets. He took two steps forward and he was tasered twice. He must have fallen and hit his head from what I saw from the photos... A minute or so after he had been tasered four firearms officers burst in. They restrained Jordan face down on the floor one 16-stone officer on each of his limbs. He was given full force blows to the back. The injuries he sustained by these officers were just astonishing. The next thing an ambulance is called, Jordan is brought out on a stretcher and later dies."_

Following deliberations, the jury delivered an unprecedented narrative verdict expressing concern about the the weapon's usage and duration as well as officers' decision to leave Jordan in a prolonged restraint position with his hands cuffed behind his back. These actions, the jury asserted, demonstrated that the officers were 'more concerned about their own safety than his [Jordan's]'. Though the initial taser shock may not have caused Jordan's heart to stop, the jury concluded that the weapon's use combined with restraint were stressor factors that 'more than materially contributed' to his death ([Hurst, 2015](#Hurs15)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Significantly, this was the first time in British history that an inquest ruled the police's use of a taser to be responsible for a death ([White, 2015](#Whit15)). The inquest also raised serious questions about the conduct of GMP officers and the IPCC during the subsequent investigation. As one of the jurors recalled,

> _“The events that followed this involved evidence going missing, the police officer that calmed Jordan down being almost bullied and silenced... The police officers stories were all different, it seemed the IPCC were covering things up. It was [an] appalling abuse of power in all aspects.”_

The subsequent judicial review also found flaws in the original IPCC investigation and, ultimately, quashed its decision that the officers involved had no case to answer relating to disciplinary charges of misconduct ([Aston, 2016](#Asto16)).  As a result of this ruling, a second IPCC investigation was opened into Jordan Begley's case. When the final report was published in October 2018 – more than five years after his death – it concluded that PC Donnelly had used ‘excessive force’ and should have faced misconduct proceedings. However, PC Donnelly had resigned from GMP in March 2018 and would never face criminal prosecution. No charges were filed against the other four officers under investigation, and the evidence of increasing taser deployment suggests lessons have not been learnt. When Dorothy Begley learned of the decision she declared it ‘a whitewash’, telling reporters that she would continue to pursue justice for her son. ‘Five years later, I’m still fighting for him,’ she declared. ‘I’ve never been this angry in my life. Where do I go from here? It’s not going to go away’ ([Robson, 2018](#Robs18)).

Novlyn Graham would face a similar uphill battle following her son’s brutalisation by police in Wythenshawe on June 6, 2014. Fifty-three-year-old Michael Gilchrist had suffered a mental health episode, slashing his hands by breaking two windows. A concerned neighbour called the police after seeing Michael walking around covered in blood from his injuries. GMP officers arrived on the scene and within two minutes had deployed CS gas and fired a taser twice, a flammable combination discouraged by police guidelines. At some point, Michael's brother rushed to the scene and tried to explain to officers that Michael suffered from mental health problems and not to hurt him. Shortly after, PC Samuel Schofield arrived drawing his taser and delivering eight additional shocks lasting a total of 72 seconds. The seventh shock was delivered in the controversial drive-stun mode in which the taser was held directly against Michael's upper back for 13 seconds. The IPCC has itself expressed 'major concerns' about the use of the drive-stun setting arguing that when used in this manner the taser 'does not have the incapacitating effect... and is purely a means of pain compliance'. The eighth and final shock was delivered while he lay prone on the ground. Michael was taken to hospital and left catatonic following the incident (Gilchrist v Greater Manchester Police, 2019; [Boyle, 2019](#Boyl19)).

Novlyn Graham filed a complaint against GMP in 2014 but claims that she was ignored.

> _“They treated him like an animal. They didn't go to see him like he was a person needing help... They just thought he was just another Black lad, he was nothing. And, when you live on a council estate you are absolute trash.” ([ITV News, 2019](#Itvn19))_

In the absence of an investigation, Novlyn Graham filed suit for damages on behalf of her son for charges of battery and negligence. In May 2019, High Court judge Justice O’Farrell ruled in the family’s favour asserting that PC Schofield had used ‘unnecessary, unreasonable and inappropriate’ force. Justice O’Farrell raised concerns about PC Schofield’s use of the taser against an identified vulnerable adult, particularly given that it followed the deployment of CS gas and two other taser discharges. O’Farrell also criticised PC Schofield’s use of the taser against Michael when he was on the ground and could have been physically restrained by officers. This final shock, O’Farrell asserted, would have ‘inflicted unnecessary pain’. In concluding, O’Farrell stated that ‘PC Schofield’s use of Taser was not justified and the extent of the force used, namely eight cycles for a cumulative period of 72 seconds, was not justified’ (ibid.).

<img alt="A sketch of one of the affected mothers reading a police report" src="/assets/images/posts/tasers/mother.jpg" class="image image--left">

It would be easy to view the cases of Jordan Begley and Michael Gilchrist as the tragic but exceptional result of the misconduct of ‘a few bad apples’ – GMP officers who violated the policy guidelines and used tasers in an unnecessary, unreasonable and inappropriate fashion. However, as this report establishes tasers pose an intrinsic and growing threat to life and the concept of policing by consent. Human rights and medical experts have raised significant questions about the general health and safety risks associated with tasers including the potential for cardiac complications leading to death. These risks are heightened when tasers are deployed against children or vulnerable adults suffering from underlying health issues such as cardiac and pulmonary conditions, diabetes and epilepsy. Moreover, an examination of statistical data shows that these general risks are compounded by discrimination and disproportionately borne by Black communities and individuals suffering from mental health conditions with potentially fatal consequences. In rebuttal, some might point to the fact that tasers are only discharged in a small percentage of cases. Most of the time, the very act of drawing the weapon is enough for police to gain control of a situation. And yet, such practices radically conflict with the concept of policing by consent and threaten to further erode police-community relations.

The first part of the report is dedicated to an examination of these broad concerns surrounding the increased access and use of tasers by police in England and Wales since 2003. As a Greater Manchester-based organisation we are especially concerned with how these developments have impacted the communities in which we live, study and work. With this in mind, the second part of the report focuses on the use of tasers by GMP identifying several key areas of concern that demand the immediate attention of policymakers, legal professionals, advocacy groups and citizens.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Background

### Police Usage of Tasers in the UK

Conducted Energy Devices (CEDs), more commonly known by the brand name Taser, are potent weapons designed to transmit 50,000 volts of electricity to shock and incapacitate individuals. The weapon fires needle-tipped darts up to 21 feet, penetrating clothing and delivering an electrical charge  into the body. In the drive-stun mode, the weapon is held directly against the body for greater potency to achieve pain compliance.

CEDs were first introduced into police forces in England and Wales in 2003. The nearly two decades since have witnessed a significant expansion in police access to and usage of CEDs. Initially trialed with specialist firearms officers in five forces, the weapon was made available in 2008 to non-firearms officers and subsequently rolled out to all 43 police forces in England and Wales in 2013. Deployed in the first instance as a ‘less lethal’ alternative to firearms, CEDs are now used by police in ‘mitigating the threat of violence’ in a much wider array of circumstances ([McGuinness, 2016](#Mcgu16); [UK Home Office, 2019](#Ukho19)).

Over the past year, the Home Office has redoubled its commitment to the expanded use of CEDs. In 2019, Northamptonshire Police became the first force to arm all frontline officers with the weapon, a practice subsequently adopted by other forces ([Baker, 2019](#Bake19)).  In March 2020, Home Secretary Priti Patel asserted that CED’s constitute a “vital option in dangerous situations,” and that forces will receive a further £6.7 million to purchase an additional 8,155 devices ([UK Home Office, 2020](#Ukho20)).  By April 2020, nearly a fifth of all police officers in England and Wales were trained to use the weapons with calls growing among rank-and-file officers and some senior police figures for universal adoption ([Busby, 2020](#Busb20)).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Concerns Raised about Police Usage of Tasers

The significant expansion in police access to and usage of CEDs in England and Wales has provoked concern among human rights and medical experts as well as the families of individuals directly impacted by the weapons. In some cases, these concerns have also been raised by senior police officers, the courts and governmental agencies tasked with investigating and reviewing police conduct such as the IOPC (formerly, the IPCC).

The concerns raised relate to four overlapping issues.

1. The general health and safety risks associated with CEDs;
1. The particular risks associated with usage of CEDs against children and vulnerable adults;
1. Significant racial disparities in CED usage;
1. The broader societal impact of excessive CED usage on the principle of policing by consent.

### 1. General Health and Safety Risks

A central rationale for the use of CEDs is their perceived function as a safer, ‘less lethal’ alternative to firearms for police seeking to ‘mitigat[e] the threat of violence’ ([McGuinness, 2016](#Mcgu16)).  However, human rights and medical experts have raised significant questions about the health and safety risks associated with CEDs including the potential for cardiac complications leading to death.

In the United States, Reuters has documented 1,005 incidents in which individuals died after police used a CED since the early 2000s. Studies of autopsy reports obtained from 712 of these incidents revealed that in 153, or more than one-fifth, of cases the CED was a cause or contributing factor to the person’s death ([Eisler et al., 2017](#Eisl17)).

In the UK, Amnesty International reports that 18 people have died after a CED was discharged against them by police since 2003. In official investigations, coroners’ inquests have now identified the use of a CED as a cause or contributing factor in the deaths of at least three individuals – Marc Cole, Jordan Begley and Andrew Pimlott ([Amnesty International, 2018](#Amne18); [Dearden, 2020](#Dear20)).

<img alt="A sketch of police officers and medical professionals talking to each other" src="/assets/images/posts/tasers/police-doctors.jpg" class="image image--right">

Particular concern has been raised about the health risks posed by Taser’s X26, a model still widely used by police forces in both the US and UK. Released in 2003, the X26 emerged as Taser’s most popular and powerful CED designed to deliver 100 microcoulombs of electricity with each pulse. When the darts impale the flesh the potency increases with the X26 capable of delivering a charge of up to 135 microcoulombs per pulse. Increased evidence of the risks associated with the X26 model have prompted declarations of concern from many human rights bodies including the United Nations Committee Against Torture. Taser International (now Axon Enterprise, Inc.) denied the allegations but halted sales of the X26 in the United States and Canada in 2014, focusing on the production of several new lower-powered ‘smart’ digital weapons ([Girion, 2017](#Giri17)).

In the UK, the Taser X26 model was the standard issue CED employed by all 43 police forces until 2018 ([UK Home Office, 2017](#Ukho17)).  That year, Taser discontinued production of the device and Home Secretary Amber Rudd announced that forces would be authorised to replace the weapon with the new lower-powered X2 model. However, police continue to carry and use both weapons ([Travis, 2017](#Trav17)).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 2. CED Use Against Children and Vulnerable Adults

While CED’s present a general risk, human rights and medical experts have raised particular concerns about the enhanced threat posed by the weapon to children and vulnerable adults – such as pregnant women, the elderly and those with underlying health problems – as well as their disproportionate usage against Black communities and individuals with mental health conditions.

In 2012, the UK Government’s Defence Scientific Advisory Council Sub-Committee on the Medical Implications of Less-Lethal Weapons (DOMILL) formally acknowledged the heightened risks associated with CED usage among individuals with underlying health issues including cardiac and pulmonary conditions, diabetes and epilepsy. However, [DOMILL’s report (2012)](#Domi12) concluded that ‘the risk of death or serious injury’ remained ‘very low’.  Despite these findings, incidents of vulnerable adults suffering injury or death involving a CED have prompted advocacy groups to call for reforms and, in some cases, an outright statutory ban. Epilepsy Action, for example, called for an independent review and enhanced police training following a number of high profile cases involving the use of CEDs against individuals during, or just after, an epileptic seizure ([Epilespy Today, 2011](#Epil11); [Disability News Service 2011](#Disa11)). The Association of Chief Police Officers (ACPO) subsequently agreed to partner with the organisation to produce national training material for inclusion in national training programs.

The [2012 DOMILL report](#Domi12) also indicated that children may be at greater risk of cardiac incidents and other internal injuries caused by CEDs, though it did not recommend that police avoid use of the weapon in such cases [1].  In fact, the number of incidents involving the use of CED’s against children has been steadily growing. Between April 2018 and March 2019, 1,700 incidents took place involving the use of CED’s against children under the age of 18 in England and Wales, constituting a 78% increase from the previous year. In total, children accounted for 8% of all CED incidents where data was available. Of that total, 29 incidents appear to have involved children under the age of 11 years though the Home Office qualified that there are problems with how data on taser usage against children is reported ([UK Home Office, 2019](#Ukho19)).  The Children’s Rights Alliance for England (CRAE) reports that Black children are disproportionately subjected to CED usage with data drawn from the Metropolitan Police indicating that Black children constituted 54% of all CED incidents in 2017 ([CRAE, 2019](#Crae19)).  Both the United Nations Committee on the Rights of the Child and the CRAE have called for the abolition of the use of CED’s on children ([Mercer, 2018](#Merc18); [CRAE, 2019](#Crae19); [UN Committee on the Rights of the Child, 2008](#Unco08)).

The escalating use of CED’s against persons with mental health conditions both in secure psychiatric settings and the community has emerged as another key area of concern. A 2018 report published by Justice Gap showed that two-thirds of people Tasered by police between 2010 and 2014 were identified as having a mental health condition ([MacAttram, 2016b](#Maca16b)). CEDs have been deployed in secure psychiatric facilities for over a decade but their use was not monitored or reported until 2017 ([Gallagher, 2017](#Gall17)).  A preliminary study by the _Guardian_ revealed that in the first year of reporting patients in secure psychiatric facilities had a CED drawn, aimed or fired at them on at least 96 occasions ([Marsh, 2018](#Mars18)).  The human rights group Black Mental Health (BMH UK) has raised awareness about the overrepresentation of Black Britons in secure psychiatric settings and their increased chances of being subjected to coercive practices including the use of CEDs. BMH UK has joined with legislators in calling for a statutory ban on the use of CEDs against people detained under the Mental Health Act ([MacAttram, 2016a](#Maca16a)).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 3. Significant Racial Disparities in CED Usage

As the preceding discussion indicates, racial disparities are pronounced in CED usage with Black people (meaning those of African or Caribbean heritage) disproportionately impacted. A study of Home Office data for England and Wales between April 2018 and March 2019 published in the _Guardian_ indicates that Black people were almost eight times more likely to have a CED used against them by police than their white counterparts. Such disparities prompted several human rights groups – including Liberty, Inquest, StopWatch and the Open Society – to announce their resignation from the National Taser Stakeholder Advisory Group (NTSAG) in March 2020. In their joint resignation letter, the groups argued that NTSAG is ‘relied on to legitimise’ the use of CEDs but was ‘regularly sidestepped’ and the contributions of members devalued ([Busby, 2020](#Busb20)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 4. Societal Impact of Excessive CED usage on the Principle of Policing by Consent

Broader concerns have also been raised about the increased usage of CEDs and the implications for the principle of policing by consent.

Expanded access to CEDs has contributed to a significant growth in the use of the weapon against members of the public. Home Office data shows that the total number of recorded incidents in which police used a CED in England and Wales grew steadily from 7,877 incidents in 2011 to 8,161 (2012), 10,380 (2013), 10,095 (2014), and 10,390 (2015). This amounted to a 31% increase in the use of CEDs by police over five years. Since 2015, however, the use of CED’s has increased rapidly from 11,294 incidents in 2016 to 17,084 (2017/18) and 23,451 (2018/19). This amounts to a 108% increase in the use of CEDs in the last three years (UK Home Office, [2017](#Ukho17), [2018](#Ukho18), [2019](#Ukho19)).

The Home Office data also indicates that police are showing an increased willingness to draw their weapon without discharging it. Between 2011 and 2015, the police discharged the CED in approximately 1 in every 5 incidents. In subsequent years, that number has declined to 1 in every 8 incidents (ibid.).

Such data raises significant concerns not only about the ballooning number of CED incidents but also that police use of the weapon is becoming routinised to secure compliance. Amnesty International’s Oliver Sprague alerted the public to these potential risks as early as 2011. Sprague asserted that police guidelines governing the use of CEDs were too broad and fostered an over-reliance on the weapon in situations where other methods might be utilised. ‘If you can get instant compliance by just pointing a Taser then there’s a strong argument for drawing it immediately,’ Sprague explained. Such methods conflict with the principle of policing by consent and serve to undermine police-community relations, particularly in the wider context of racial disparities and overpolicing ([LCSSA, 2011](#Lcss11)).  In 2014, the Independent Police Complaints Commission also warned against the use of tasers on the basis of availability as opposed to necessity ([McGuinness, 2016](#Mcgu16)).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## CED Usage by Greater Manchester Police

Resistance Lab is concerned with the impact of these broader and well-documented national developments on local policing practices in Greater Manchester. By examining governmental records and media coverage in tandem with the personal testimonies of those individuals and families directly affected, we aim to promote better understanding of the ways in which expanded police access to and usage of CEDs has impacted the communities in which we live, work, and study.

Our understanding of how GMP employ CED's and other use of force tactics has been enhanced by recent reforms to mandated reporting practices. Since the introduction of CED's in 2003, all police officers have been required to complete a Taser deployment form to record any and all usage. This data is stored, compiled and publicly reported by the Home Office on an annual basis. In 2017, the Home Office expanded reporting to include all 'use of force' incidents, a term that captures a range of tactics from physical restraint to use of a baton, firearms, police dogs, irritant sprays and CEDs. This is a new, 'experimental' statistical collection that the Home Office acknowledges it is still working to refine. However, this data does provide valuable insight into the scope and scale of the UK police's use of force as well as the performance of forces at the local level. Crucially, it also affords the public with information related to how variables such as race and ethnicity, age, gender, and disability inform encounters with police officers.

An examination of Home Office use of force data on the Greater Manchester Police (GMP) raises a number of areas of concern.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 1. GMP uses CEDs more often than other forces

Home Office data for April 2018 through March 2019 indicates that Greater Manchester Police (GMP) reported more incidents involving CED’s (1,442), whether discharged or not, than any other force with the exception of the Metropolitan Police (7,396). In total, the GMP accounted for 6% of all incidents involving a CED in England and Wales in 2018/19.

It is perhaps unsurprising that police forces located in heavily populated urban areas report larger total numbers of incidents involving CEDs. However, an examination of the rate of taser usage per 100 officers reveals that GMP ranked 11th highest out of the forty-three forces in England and Wales. In total, GMP averaged 22 incidents involving a CED per 100 officers between April 2018 and March 2019. Northamptonshire Police - the first force to make tasers available to all frontline officers in 2019 - had the highest rate at 45 incidents per 100 officers.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 2. The rate at which GMP uses CEDs is rising quickly

GMP’s use of CED’s is also rapidly increasing with a total of 1,442 incidents in 2018/19 up from 832 in 2017/18, 799 in 2016, and 779 in 2015. In the last financial year alone GMP’s use of CED’s increased by 73%. Though 2018/19 witnessed a significant expansion in the weapon’s availability and use nationwide, GMP’s rate of increase exceeded the national average of 28% as well as that of comparable forces such as the Metropolitan Police which reported a 33% increase in the use of CEDs.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 3. GMP are firing their CEDs more often that other forces

GMP officers are also more likely to discharge a CED during the course of their duties than their counterparts on other forces. In 2018/19, GMP reported that police discharged a CED on 242 occasions or approximately 1 in every 6 incidents involving the weapon. During that same period, the Metropolitan Police reported that CED’s were discharged during approximately 1 in every 10 incidents involving the weapon while the national average was approximately 1 in every 8 incidents`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 4. GMP are disproportionately using CEDs against Black people

GMP also reports significant racial disparities in the usage of CED’s with Black people disproportionately impacted. In 2018/19, GMP reported 1,442 incidents involving use of a CED in Greater Manchester. Of that total, the ethnicity of the subject was perceived by the reporting officer to be White in 1,118 (78%); Black in 142 (10%); Asian in 94 (7%); Chinese in 2 (0.1%); Mixed in 48 (3%); Other in 20 (1%) and Don’t Know in 18 (1%). Though Whites constituted a numerical majority, Black people were 4 times more likely to have a CED used against them relative to population size. In total, Black people in Greater Manchester were subjected to CED usage by police at a rate of 19 out of every 10,000 compared to 5 out of every 10,000 for whites and 4 out of every 10,000 for Asians ([Office for National Statistics 2011](#Offi11); [Busby, 2020](#Busb20)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 5. GMP are using CEDs against children at high rates, even those under the age of 11 years

GMP also reports disproportionately high rates of CED usage against children. In 2018/19, GMP reported more incidents involving the use of a CED against children under the age of 18 years (118), whether discharged or not, than any other force with the exception of the Metropolitan Police (783).

As with general CED usage, it is perhaps unsurprising that police forces located in heavily populated urban areas like London and Manchester report higher numbers of total incidents. However, an examination of the rate of taser usage per 100 officers reveals that GMP ranked 6th highest out of forty-three forces in England and Wales. Between April 2018 and March 2019, GMP averaged 1.8 incidents involving the use of a CED against children under the age of 18 per 100 officers. This average exceeded other forces with a commensurable number of officers such as the West Midlands Police which reported a total of 38 incidents for an average of 0.6 incidents per 100 officers. The highest rate of taser usage against children under the age of 18 years was again reported by the much smaller Northamptonshire Police and averaged 3.6 incidents per 100 officers.

Unfortunately, we do not have data that considers age in relation to other characteristics such as race and ethnicity. However, studies of comparable forces such as the Metropolitan Police indicate that Black children are grossly overrepresented in incidents involving the use of CEDs ([CRAE, 2018](#Crae18)).

The situation is even more troubling when considering the specific experiences of children under the age of 11 years. Between April 2018 and March 2019, the Home Office reported 29 incidents of CED's being used against children under the age of 11 years in England and Wales. Of those incidents, GMP was responsible for a total of 8 - more than any other force in the country. The CED was not discharged in any of these cases and the Home Office cautioned that there were 'known errors in the under 11 data', including instances of CED usage against animals and other cases that have been 'incorrectly categories'. However, such findings are distressing and demand urgent clarification.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 6. GMP are more likely to use CEDs against people with disabilities than other forces

Home Office use of force statistics include data related to disability. However, as with other variables considered in this report (e.g., age, race and ethnicity) data on disability is recorded from the perception of the reporting police officer and is therefore less reliable than might initially appear. Moreover, many disabilities are invisible and thus underrepresented in the data.

Despite these challenges, Home Office data does provide a window into some of the disparities that exist in CED usage related to people perceived by officers as having ‘physical or mental disabilities.’ In 2018/19, GMP reported that individuals perceived to have either physical or mental disabilities constituted 210 or 15% of all CED incidents (1,442). An examination of the rate of taser usage against such individuals  reveals that GMP ranked 20th highest out of forty-three forces in England and Wales. Between April 2018 and March 2019, GMP averaged 3.2 incidents involving the use of a taser against an individual with mental and/or physical disabilities per 100 officers. Particularly high average rates of taser usage against individuals with disabilities were recorded by smaller forces - such as Devon & Cornwall (9.2 per 100 officers) Dfyed-Powys (8.7 per 100 officers) and Northamptonshire (8.5 per 100 officers).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Discussion & Recommendations

In the early hours of November 23, 2009, 41-year-old Howard Swarray threw on his gym clothes and headed over to the Whalley Range Powerhouse Gym for his regular morning workout. Within a few minutes, he began to feel light-headed. Having been diagnosed with epilepsy, Swarray recognised this sensation as the onset of a seizure which he believed was triggered from stress related to the one-year anniversary his daughters death. As Swarray collapsed to the ground, gym staff and fellow users rushed to help. Fifteen minutes later paramedics were on the scene checking Swarray for injuries and evidence of underlying health problems that might have triggered the events.

In the next few moments, Swarray lashed out in a postictal state of confusion and disorientation. Unaware of his actions or surroundings, he struggled with the paramedics and others trying to assist him before climbing atop a reception desk. It was at this point that paramedics felt it necessary to call GMP for assistance. On the drive over, one officer asserted:

> _"If he is getting aggressive, I am sure 50,000 volts will stand him up"_

Upon arrival police attempted to physically restrain Swarray kicking his legs out from under him. The officer who had made the aforementioned comments then drew and fired his taser twice, the second time in drive-stun mode with the taser held directly against Swarray’s body. The other officers stood on Swarray’s legs and bent back his toes until they could place him in restraints. Swarray was subsequently taken to the Manchester Royal Infirmary where he was sedated and spent eight days in an induced coma ([Wired Gov, 2011](#Wire11)).

In the aftermath, Swarray was diagnosed with renal failure stemming from the physical exertion and muscle contractions caused by the epileptic seizure and subsequent struggle with police. Medical professionals explained that Swarray would not have been in control of his actions during this postictal phase and, for his part, Swarray claimed no recollection of the events at all. ‘I nearly died,’ he explained. ‘All I remember is waking up in intensive care. I wasn’t being violent, I was having a seizure’ ([BBC, 2018](#Bbc18)). Beyond the physical effects, Swarray’s experience also left him suffering from panic attacks and prolonged bouts of depression. ‘When I go out now I’m scared. I hope nothing happens to me and I have a seizure in the street because I may have to go through what I was put through last time waking up in intensive care’ ([LCCSA, 2011](#Lccs11)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Howard Swarray’s experience exemplifies the dangers of increased police access to and usage of tasers highlighted by this report. The police’s use of tasers always takes place within a wider context of systemic racism and inequality exploiting underlying comorbidities in the most vulnerable with potentially lethal consequences. Black men like Swarray are already ten times more likely to have a taser drawn on them by GMP than their white counterparts. For Swarray, this risk was further compounded by his invisible disability which could manifest in unexpected seizures leading to disorientation and aggression. The availability of tasers in the hands of police heightened these risks turning what had initially been a call for medical assistance into an event that nearly cost Swarray his life.

Like the mothers of Jordon Begley and Michael Gilchrist, Swarray would have to summon the energy after this traumatic experience to hold the police accountable. In March 2010, he would file a complaint alleging that GMP officers use of the taser had been inappropriate and excessive. This process would be long and arduous, ultimately resulting in an IPCC investigation that vindicated the officers in 2011. Though some of their behaviour may have been ‘questionable’, IPCC Commissioner Naseem Malik found that ‘nothing within either ACPO [Association of Chief Police Officers] or GMP policies… prevents the use of Taser against a person who has suffered an epileptic seizure’ ([Carter, 2011](#Cart11)).  When DOMILL reviewed the medical implications of Tasers that same year they agreed that individuals with epilepsy (and other underlying medical or mental health conditions) faced an ‘elevated risk of exposure to Taser discharge’ due to their seeming non-compliance or aggression. DOMILL also found ‘equivocal evidence’ to suggest that Tasers could even trigger epileptic seizures. And yet, as with their findings on the particular vulnerabilities of children to Taser usage, DOMILL failed to call for an end to the practice ([DOMILL, 2011](#Domi11)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Our Demands

With tasers being rolled out around the country and an absence of accountability, we can only expect to see more cases in which members of the public suffer serious injury or loss of life.

Resistance Lab stands in solidarity with the victims and families impacted by police usage of tasers and with this report we make one simple demand: **the abolition of tasers**.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Notes

_Do we need footnotes at all or can we keep it in the main doc?_
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ## Bibliography`
)});
  main.variable(observer()).define(["md","bibliography"], function(md,bibliography)
{
  let bib = md`${bibliography.format('bibliography', {
    format: 'text',
    template: 'md',
    prepend() {
      return `* `;
    }
  })}`;
  bib.querySelectorAll('li a:first-child').forEach(link => {
    link.setAttribute('name', link.hash.substr(1));
    link.removeAttribute('href');
  });
  return bib;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Data Appendix`
)});
  main.variable(observer("bibtex")).define("bibtex", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("bibliography@4.json")
)});
  main.variable(observer("bibtexJson")).define("bibtexJson", ["bibtex"], function(bibtex){return(
bibtex.json()
)});
  main.variable(observer("bibliography")).define("bibliography", ["Cite","bibtexJson"], function(Cite,bibtexJson){return(
new Cite(bibtexJson)
)});
  main.variable(observer("Cite")).define("Cite", ["require"], function(require){return(
require('https://bundle.run/citation-js@0.5.0-alpha.5')
)});
  main.variable(observer()).define(["config","csl"], function(config,csl){return(
config.templates.add('md', csl)
)});
  main.variable(observer("csl")).define("csl", function(){return(
`<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" page-range-format="expanded">
  <info>
    <title>American Psychological Association 7th edition</title>
    <title-short>APA</title-short>
    <id>http://www.zotero.org/styles/apa</id>
    <link href="http://www.zotero.org/styles/apa" rel="self"/>
    <link href="http://www.zotero.org/styles/apa-6th-edition" rel="template"/>
    <link href="https://apastyle.apa.org/style-grammar-guidelines/references/examples" rel="documentation"/>
    <author>
      <name>Brenton M. Wiernik</name>
      <email>zotero@wiernik.org</email>
    </author>
    <category citation-format="author-date"/>
    <category field="psychology"/>
    <category field="generic-base"/>
    <updated>2019-12-04T13:09:49+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="en">
    <terms>
      <term name="editortranslator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
      <term name="translator" form="short">trans.</term>
      <term name="interviewer" form="short">
        <single>interviewer</single>
        <multiple>interviewers</multiple>
      </term>
      <term name="collection-editor" form="short">
        <single>ed.</single>
        <multiple>eds.</multiple>
      </term>
      <term name="circa" form="short">ca.</term>
      <term name="bc"> B.C.E.</term>
      <term name="ad"> C.E.</term>
      <term name="letter">personal communication</term>
      <term name="letter" form="short">letter</term>
      <term name="issue" form="long">
        <single>issue</single>
        <multiple>issues</multiple>
      </term>
    </terms>
  </locale>
  <locale xml:lang="af">
    <terms>
      <term name="letter">persoonlike kommunikasie</term>
      <term name="letter" form="short">brief</term>
    </terms>
  </locale>
  <locale xml:lang="ar">
    <terms>
      <term name="letter">اتصال شخصي</term>
      <term name="letter" form="short">خطاب</term>
    </terms>
  </locale>
  <locale xml:lang="da">
    <terms>
      <term name="et-al">et al.</term>
      <term name="letter">personlig kommunikation</term>
      <term name="letter" form="short">brev</term>
    </terms>
  </locale>
  <locale xml:lang="de">
    <terms>
      <term name="et-al">et al.</term>
      <term name="letter">persönliche Kommunikation</term>
      <term name="letter" form="short">Brief</term>
    </terms>
  </locale>
  <locale xml:lang="es">
    <terms>
      <term name="from">de</term>
      <term name="letter">comunicación personal</term>
      <term name="letter" form="short">carta</term>
    </terms>
  </locale>
  <locale xml:lang="fr">
    <terms>
      <term name="letter">communication personnelle</term>
      <term name="letter" form="short">lettre</term>
      <term name="editor" form="short">
        <single>éd.</single>
        <multiple>éds.</multiple>
      </term>
    </terms>
  </locale>
  <locale xml:lang="nb">
    <terms>
      <term name="et-al">et al.</term>
      <term name="letter">personlig kommunikasjon</term>
      <term name="letter" form="short">brev</term>
    </terms>
  </locale>
  <locale xml:lang="nl">
    <terms>
      <term name="et-al">et al.</term>
      <term name="letter">persoonlijke communicatie</term>
      <term name="letter" form="short">brief</term>
    </terms>
  </locale>
  <locale xml:lang="nn">
    <terms>
      <term name="et-al">et al.</term>
      <term name="letter">personlig kommunikasjon</term>
      <term name="letter" form="short">brev</term>
    </terms>
  </locale>
  <locale xml:lang="ru">
    <terms>
      <term name="letter">личная переписка</term>
      <term name="letter" form="short">письмо</term>
    </terms>
  </locale>
  <locale xml:lang="tr">
    <terms>
      <term name="letter">kişisel iletişim</term>
      <term name="letter" form="short">mektup</term>
    </terms>
  </locale>


  <macro name="author-bib">
    <text variable="citation-label" prefix="[](#" suffix=") "/>
    <names variable="composer" delimiter=", ">
      <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
      <substitute>
        <names variable="author"/>
        <names variable="illustrator"/>
        <names variable="director">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="long" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <choose>
          <if variable="container-title">
            <choose>
              <if type="book entry entry-dictionary entry-encyclopedia" match="any">
                <choose>
                  <if variable="title">
                    <group delimiter=" ">
                      <text macro="title"/>
                      <text macro="parenthetical"/>
                    </group>
                  </if>
                  <else>
                    <text macro="title-and-descriptions"/>
                  </else>
                </choose>
              </if>
            </choose>
          </if>
        </choose>

        <names variable="editor" delimiter=", ">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <names variable="editorial-director">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <names variable="collection-editor">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <choose>
          <if variable="title">
            <group delimiter=" ">
              <text macro="title"/>
              <text macro="parenthetical"/>
            </group>
          </if>
          <else>
            <text macro="title-and-descriptions"/>
          </else>
        </choose>
      </substitute>
    </names>
  </macro>
  <macro name="author-intext">
    <choose>
      <if type="bill legal_case legislation treaty" match="any">
        <text macro="title-intext"/>
      </if>
      <else-if type="interview personal_communication">
        <choose>

          <if variable="archive container-title DOI publisher URL" match="none">
            <group delimiter=", ">
              <names variable="author">
                <name and="symbol" delimiter=", " initialize-with=". "/>
                <substitute>
                  <text macro="title-intext"/>
                </substitute>
              </names>

              <text term="letter"/>
            </group>
          </if>
          <else>
            <names variable="author" delimiter=", ">
              <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
              <substitute>
                <text macro="title-intext"/>
              </substitute>
            </names>
          </else>
        </choose>
      </else-if>
      <else>
        <names variable="composer" delimiter=", ">
          <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="author"/>
            <names variable="illustrator"/>
            <names variable="director"/>
            <choose>
              <if variable="container-title">
                <choose>
                  <if type="book entry entry-dictionary entry-encyclopedia" match="any">
                    <text macro="title-intext"/>
                  </if>
                </choose>
              </if>
            </choose>
            <names variable="editor"/>
            <names variable="editorial-director"/>
            <text macro="title-intext"/>
          </substitute>
        </names>
      </else>
    </choose>
  </macro>
  <macro name="date-bib">
    <group delimiter=" " prefix="(" suffix=")">
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short"/>
        </if>
      </choose>
      <group>
        <choose>
          <if variable="issued">
            <date variable="issued">
              <date-part name="year"/>
            </date>
            <text variable="year-suffix"/>
            <choose>
              <if type="article-magazine article-newspaper broadcast interview motion_picture pamphlet personal_communication post post-weblog song speech webpage" match="any">

                <date variable="issued">
                  <date-part prefix=", " name="month"/>
                  <date-part prefix=" " name="day"/>
                </date>
              </if>
              <else-if type="paper-conference">

                <choose>
                  <if variable="collection-editor editor editorial-director issue page volume" match="none">
                    <date variable="issued">
                      <date-part prefix=", " name="month"/>
                      <date-part prefix=" " name="day"/>
                    </date>
                  </if>
                </choose>
              </else-if>

            </choose>
          </if>
          <else-if variable="status">
            <group>
              <text variable="status" text-case="lowercase"/>
              <text variable="year-suffix" prefix="-"/>
            </group>
          </else-if>
          <else>
            <group>
              <text term="no date" form="short"/>
              <text variable="year-suffix" prefix="-"/>
            </group>
          </else>
        </choose>
      </group>
    </group>
  </macro>
  <macro name="date-sort-group">
    <choose>
      <if variable="issued">
        <text value="1"/>
      </if>
      <else-if variable="status">
        <text value="2"/>
      </else-if>
      <else>
        <text value="0"/>
      </else>
    </choose>
  </macro>
  <macro name="date-sort-date">
    <choose>
      <if type="article-magazine article-newspaper broadcast interview pamphlet personal_communication post post-weblog speech treaty webpage" match="any">
        <date variable="issued" form="numeric"/>
      </if>
      <else-if type="paper-conference">

        <choose>
          <if variable="collection-editor editor editorial-director issue page volume" match="none">
            <date variable="issued" form="numeric"/>
          </if>
        </choose>
      </else-if>
      <else>
        <date variable="issued" form="numeric"/>
      </else>
    </choose>
  </macro>
  <macro name="date-intext">
    <choose>
      <if variable="issued">
        <group delimiter="/">
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="original-date">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <date variable="original-date">
              <date-part name="year"/>
            </date>
          </group>
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="issued">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <group>
              <choose>
                <if type="interview personal_communication">
                  <choose>
                    <if variable="archive container-title DOI publisher URL" match="none">

                      <date variable="issued" form="text"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="year"/>
                      </date>
                    </else>
                  </choose>
                </if>
                <else>
                  <date variable="issued">
                    <date-part name="year"/>
                  </date>
                </else>
              </choose>
              <text variable="year-suffix"/>
            </group>
          </group>
        </group>
      </if>
      <else-if variable="status">
        <text variable="status" text-case="lowercase"/>
        <text variable="year-suffix" prefix="-"/>
      </else-if>
      <else>
        <text term="no date" form="short"/>
        <text variable="year-suffix" prefix="-"/>
      </else>
    </choose>
  </macro>

  <macro name="title-and-descriptions">
    <choose>
      <if variable="title">
        <group delimiter=" ">
          <text macro="title"/>
          <text macro="parenthetical"/>
          <text macro="bracketed"/>
        </group>
      </if>
      <else>
        <group delimiter=" ">
          <text macro="bracketed"/>
          <text macro="parenthetical"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="title">
    <group prefix="[_" suffix="_]">
      <choose>
        <if type="post webpage" match="any">
          <text variable="title" font-style="italic"/>
        </if>
        <else-if variable="container-title" match="any">
          <text variable="title"/>
        </else-if>
        <else>
          <choose>
            <if type="article-journal article-magazine article-newspaper post-weblog review review-book">
              <text variable="title" font-style="italic" />
            </if>
            <else-if type="paper-conference">
              <choose>
                <if variable="collection-editor editor editorial-director" match="any">
                  <group delimiter=": " font-style="italic">
                    <text variable="title"/>

                    <choose>
                      <if is-numeric="volume" match="none">
                        <group delimiter=" ">
                          <label variable="volume" form="short" text-case="capitalize-first"/>
                          <text variable="volume"/>
                        </group>
                      </if>
                    </choose>
                  </group>
                </if>
                <else>
                  <text variable="title" font-style="italic"/>
                </else>
              </choose>
            </else-if>
            <else>
              <group delimiter=": " font-style="italic">
                <text variable="title"/>

                <choose>
                  <if is-numeric="volume" match="none">
                    <group delimiter=" ">
                      <label variable="volume" form="short" text-case="capitalize-first"/>
                      <text variable="volume"/>
                    </group>
                  </if>
                </choose>
              </group>
            </else>
          </choose>
        </else>
      </choose>
    </group>
    <if variable="URL">
      <text variable="URL" prefix="(" suffix=")"/>
    </if>
  </macro>
  <macro name="title-intext">
    <choose>
      <if variable="title" match="none">
        <text macro="bracketed-intext" prefix="[" suffix="]"/>
      </if>
      <else-if type="bill">

        <choose>
          <if variable="number container-title" match="none">
            <text variable="title" form="short" font-style="italic" text-case="title"/>
          </if>
          <else-if variable="title">
            <text variable="title" form="short" text-case="title"/>
          </else-if>
          <else>
            <group delimiter=" ">
              <text variable="genre"/>
              <group delimiter=" ">
                <choose>
                  <if variable="chapter-number container-title" match="none">

                    <text term="issue" form="short"/>
                  </if>
                </choose>
                <text variable="number"/>
              </group>
            </group>
          </else>
        </choose>
      </else-if>
      <else-if type="legal_case" match="any">

        <text variable="title" font-style="italic"/>
      </else-if>
      <else-if type="legislation treaty" match="any">

        <text variable="title" form="short" text-case="title"/>
      </else-if>
      <else-if type="post webpage" match="any">

        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else-if>
      <else-if variable="container-title" match="any">

        <text variable="title" form="short" quotes="true" text-case="title"/>
      </else-if>
      <else>
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="parenthetical">

    <group prefix="(" suffix=")">
      <choose>
        <if type="patent">

          <group delimiter=" ">
            <text variable="authority" form="short"/>
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>

                <text value="patent" text-case="capitalize-first"/>
              </else>
            </choose>
            <group delimiter=" ">

              <text term="issue" form="short" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </group>
        </if>
        <else-if type="post webpage">

          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else-if>
        <else-if variable="container-title">
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="any">

                <text macro="number"/>
              </if>
            </choose>
          </group>
        </else-if>
        <else>
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="parenthetical-container">
    <choose>
      <if variable="container-title" match="any">
        <group prefix="(" suffix=")">
          <group delimiter="; ">
            <text macro="database-location"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="none">

                <text macro="number"/>
              </if>
            </choose>
            <text macro="locators-booklike"/>
          </group>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="bracketed">


    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-author reviewed-title" type="review review-book" match="any">

          <group delimiter="; ">
            <group delimiter=", ">
              <group delimiter=" ">

                <choose>
                  <if variable="number" match="none">
                    <choose>
                      <if variable="genre">
                        <text variable="genre" text-case="capitalize-first"/>
                      </if>
                      <else-if variable="medium">
                        <text variable="medium" text-case="capitalize-first"/>
                      </else-if>
                      <else>

                        <text value="Review of"/>
                      </else>
                    </choose>
                  </if>
                  <else>
                    <choose>
                      <if variable="medium">
                        <text variable="medium" text-case="capitalize-first"/>
                      </if>
                      <else>

                        <text value="Review of"/>
                      </else>
                    </choose>
                  </else>
                </choose>
                <text macro="reviewed-title"/>
              </group>
              <names variable="reviewed-author">
                <label form="verb-short" suffix=" "/>
                <name and="symbol" initialize-with=". " delimiter=", "/>
              </names>
            </group>
            <choose>
              <if variable="genre" match="any">
                <choose>
                  <if variable="number" match="none">
                    <text variable="medium" text-case="capitalize-first"/>
                  </if>
                </choose>
              </if>
            </choose>
          </group>
        </if>
        <else-if type="thesis">

          <group delimiter="; ">
            <choose>
              <if variable="number" match="none">
                <group delimiter=", ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <choose>
                    <if variable="archive DOI URL" match="any">

                      <text variable="publisher"/>
                    </if>
                  </choose>
                </group>
              </if>
            </choose>
            <text variable="medium" text-case="capitalize-first"/>
          </group>
        </else-if>
        <else-if variable="interviewer" type="interview" match="any">

          <choose>
            <if variable="title">
              <text macro="format"/>
            </if>
            <else-if variable="genre">
              <group delimiter="; ">
                <group delimiter=" ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <group delimiter=" ">
                    <text term="author" form="verb"/>
                    <names variable="interviewer">
                      <name and="symbol" initialize-with=". " delimiter=", "/>
                    </names>
                  </group>
                </group>
              </group>
            </else-if>
            <else-if variable="interviewer">
              <group delimiter="; ">
                <names variable="interviewer">
                  <label form="verb" suffix=" " text-case="capitalize-first"/>
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                </names>
                <text variable="medium" text-case="capitalize-first"/>
              </group>
            </else-if>
            <else>
              <text macro="format"/>
            </else>
          </choose>
        </else-if>
        <else-if type="personal_communication">

          <choose>
            <if variable="recipient">
              <group delimiter="; ">
                <group delimiter=" ">
                  <choose>
                    <if variable="number" match="none">
                      <choose>
                        <if variable="genre">
                          <text variable="genre" text-case="capitalize-first"/>
                        </if>
                        <else-if variable="medium">
                          <text variable="medium" text-case="capitalize-first"/>
                        </else-if>
                        <else>
                          <text term="letter" form="short" text-case="capitalize-first"/>
                        </else>
                      </choose>
                    </if>
                    <else>
                      <choose>
                        <if variable="medium">
                          <text variable="medium" text-case="capitalize-first"/>
                        </if>
                        <else>
                          <text term="letter" form="short" text-case="capitalize-first"/>
                        </else>
                      </choose>
                    </else>
                  </choose>
                  <names variable="recipient" delimiter=", ">
                    <label form="verb" suffix=" "/>
                    <name and="symbol" delimiter=", "/>
                  </names>
                </group>
                <choose>
                  <if variable="genre" match="any">
                    <choose>
                      <if variable="number" match="none">
                        <text variable="medium" text-case="capitalize-first"/>
                      </if>
                    </choose>
                  </if>
                </choose>
              </group>
            </if>
            <else>
              <text macro="format"/>
            </else>
          </choose>
        </else-if>
        <else-if variable="composer" type="song" match="all">

          <group delimiter="; ">
            <choose>
              <if variable="number" match="none">
                <group delimiter=" ">
                  <choose>
                    <if variable="genre">
                      <text variable="genre" text-case="capitalize-first"/>

                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </if>
                    <else-if variable="medium">
                      <text variable="medium" text-case="capitalize-first"/>

                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else-if>
                    <else>

                      <names variable="author" prefix="Recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else>
                  </choose>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <choose>
                    <if variable="medium">
                      <text variable="medium" text-case="capitalize-first"/>

                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </if>
                    <else>

                      <names variable="author" prefix="Recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else>
                  </choose>
                </group>
              </else>
            </choose>
            <choose>
              <if variable="genre" match="any">
                <choose>
                  <if variable="number" match="none">
                    <text variable="medium" text-case="capitalize-first"/>
                  </if>
                </choose>
              </if>
            </choose>
          </group>
        </else-if>
        <else-if variable="container-title" match="none">

          <text macro="format"/>
        </else-if>
        <else>

          <choose>
            <if type="paper-conference speech" match="any">
              <choose>
                <if variable="collection-editor editor editorial-director issue page volume" match="any">
                  <text macro="format"/>
                </if>
              </choose>
            </if>
            <else-if type="book">
              <choose>
                <if variable="version" match="none">
                  <text macro="format"/>
                </if>
              </choose>
            </else-if>
            <else-if type="report" match="none">
              <text macro="format"/>
            </else-if>
          </choose>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed-intext">
    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-author reviewed-title" type="review review-book" match="any">

          <text macro="reviewed-title-intext" prefix="Review of "/>
        </if>
        <else-if variable="interviewer" type="interview" match="any">
          <names variable="interviewer">
            <label form="verb" suffix=" " text-case="capitalize-first"/>
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <substitute>
              <text macro="format-intext"/>
            </substitute>
          </names>
        </else-if>
        <else-if type="personal_communication">

          <choose>
            <if variable="recipient">
              <group delimiter=" ">
                <choose>
                  <if variable="number" match="none">
                    <text variable="genre" text-case="capitalize-first"/>
                  </if>
                  <else>
                    <text term="letter" form="short" text-case="capitalize-first"/>
                  </else>
                </choose>
                <names variable="recipient" delimiter=", ">
                  <label form="verb" suffix=" "/>
                  <name and="symbol" delimiter=", "/>
                </names>
              </group>
            </if>
            <else>
              <text macro="format-intext"/>
            </else>
          </choose>
        </else-if>
        <else>
          <text macro="format-intext"/>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed-container">
    <group prefix="[" suffix="]">
      <choose>
        <if type="paper-conference speech" match="any">

          <choose>
            <if variable="collection-editor editor editorial-director issue page volume" match="none">
              <text macro="format"/>
            </if>
          </choose>
        </if>
        <else-if type="book" variable="version" match="all">

          <text macro="format"/>
        </else-if>
        <else-if type="report">

          <text macro="format"/>
        </else-if>
      </choose>
    </group>
  </macro>
  <macro name="secondary-contributors">
    <choose>
      <if type="article-journal article-magazine article-newspaper post-weblog review review-book" match="any">
        <text macro="secondary-contributors-periodical"/>
      </if>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor editor editorial-director" match="any">
            <text macro="secondary-contributors-booklike"/>
          </if>
          <else>
            <text macro="secondary-contributors-periodical"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text macro="secondary-contributors-booklike"/>
      </else>
    </choose>
  </macro>
  <macro name="secondary-contributors-periodical">
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer" delimiter="; ">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>
      <names variable="translator" delimiter="; ">
        <name and="symbol" initialize-with=". " delimiter=", "/>
        <label form="short" prefix=", " text-case="title"/>
      </names>
    </group>
  </macro>
  <macro name="secondary-contributors-booklike">
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>

      <choose>
        <if type="post webpage" match="none">

          <choose>
            <if variable="container-title" match="none">
              <group delimiter="; ">
                <names variable="container-author">
                  <label form="verb-short" suffix=" " text-case="title"/>
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                </names>
                <names variable="editor translator" delimiter="; ">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" prefix=", " text-case="title"/>
                </names>
              </group>
            </if>
          </choose>
        </if>
        <else>
          <group delimiter="; ">
            <names variable="container-author">
              <label form="verb-short" suffix=" " text-case="title"/>
              <name and="symbol" initialize-with=". " delimiter=", "/>
            </names>
            <names variable="editor translator" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="title"/>
            </names>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="database-location">
    <choose>
      <if variable="archive-place" match="none">


        <text variable="archive_location"/>
      </if>
    </choose>
  </macro>
  <macro name="number">
    <choose>
      <if variable="number">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre" text-case="title"/>
            <choose>
              <if is-numeric="number">

                <text term="issue" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </if>
              <else>
                <text variable="number"/>
              </else>
            </choose>
          </group>
          <choose>
            <if type="thesis">
              <choose>

                <if variable="archive DOI URL" match="any">
                  <text variable="publisher"/>
                </if>
              </choose>
            </if>
          </choose>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="locators-booklike">
    <choose>
      <if type="article-journal article-magazine article-newspaper broadcast interview patent post post-weblog review review-book speech webpage" match="any"/>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor editor editorial-director" match="any">
            <group delimiter=", ">
              <text macro="version"/>
              <text macro="edition"/>
              <text macro="volume-booklike"/>
            </group>
          </if>
        </choose>
      </else-if>
      <else>
        <group delimiter=", ">
          <text macro="version"/>
          <text macro="edition"/>
          <text macro="volume-booklike"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="version">
    <choose>
      <if is-numeric="version">
        <group delimiter=" ">

          <text term="version" text-case="capitalize-first"/>
          <text variable="version"/>
        </group>
      </if>
      <else>
        <text variable="version"/>
      </else>
    </choose>
  </macro>
  <macro name="edition">
    <choose>
      <if is-numeric="edition">
        <group delimiter=" ">
          <number variable="edition" form="ordinal"/>
          <label variable="edition" form="short"/>
        </group>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-booklike">
    <group delimiter=", ">

      <choose>
        <if type="report">
          <group delimiter=" ">
            <text variable="collection-title" text-case="title"/>
            <text variable="collection-number"/>
          </group>
        </if>
      </choose>
      <choose>
        <if variable="volume" match="any">
          <choose>

            <if is-numeric="volume" match="none"/>
            <else>
              <group delimiter=" ">
                <label variable="volume" form="short" text-case="capitalize-first"/>
                <number variable="volume" form="numeric"/>
              </group>
            </else>
          </choose>
        </if>
        <else>
          <group>

            <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
            <text term="page-range-delimiter" prefix="1"/>
            <number variable="number-of-volumes" form="numeric"/>
          </group>
        </else>
      </choose>
      <group delimiter=" ">
        <label variable="issue" text-case="capitalize-first"/>
        <text variable="issue"/>
      </group>
      <group delimiter=" ">
        <label variable="page" form="short" suffix=" "/>
        <text variable="page"/>
      </group>
    </group>
  </macro>
  <macro name="reviewed-title">
    <choose>
      <if variable="reviewed-title">

        <text variable="reviewed-title" font-style="italic"/>
      </if>
      <else>

        <text variable="title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="reviewed-title-intext">
    <choose>
      <if variable="reviewed-title">

        <text variable="reviewed-title" form="short" font-style="italic" text-case="title"/>
      </if>
      <else>

        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="format">
    <choose>
      <if variable="genre medium" match="any">
        <group delimiter="; ">
          <choose>
            <if variable="number" match="none">
              <text variable="genre" text-case="capitalize-first"/>
            </if>
          </choose>
          <text variable="medium" text-case="capitalize-first"/>
        </group>
      </if>


      <else-if type="dataset">
        <text value="Data set"/>
      </else-if>
      <else-if type="book" variable="version" match="all">

        <text value="Computer software"/>
      </else-if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <if variable="archive container-title DOI publisher URL" match="none">
            <text term="letter" text-case="capitalize-first"/>
          </if>
          <else-if type="interview">
            <text term="interview" text-case="capitalize-first"/>
          </else-if>
        </choose>
      </else-if>
      <else-if type="map">
        <text value="Map"/>
      </else-if>
    </choose>
  </macro>
  <macro name="format-intext">
    <choose>
      <if variable="genre" match="any">
        <text variable="genre" text-case="capitalize-first"/>
      </if>
      <else-if variable="medium">
        <text variable="medium" text-case="capitalize-first"/>
      </else-if>


      <else-if type="dataset">
        <text value="Data set"/>
      </else-if>
      <else-if type="book" variable="version" match="all">

        <text value="Computer software"/>
      </else-if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <if variable="archive container-title DOI publisher URL" match="none">
            <text term="letter" text-case="capitalize-first"/>
          </if>
          <else-if type="interview">
            <text term="interview" text-case="capitalize-first"/>
          </else-if>
        </choose>
      </else-if>
      <else-if type="map">
        <text value="Map"/>
      </else-if>
    </choose>
  </macro>

  <macro name="container">
    <choose>
      <if type="article-journal article-magazine article-newspaper post-weblog review review-book" match="any">

        <text macro="container-periodical"/>
      </if>
      <else-if type="paper-conference">

        <choose>
          <if variable="editor editorial-director collection-editor container-author" match="any">
            <text macro="container-booklike"/>
          </if>
          <else>
            <text macro="container-periodical"/>
          </else>
        </choose>
      </else-if>
      <else-if type="post webpage" match="none">

        <text macro="container-booklike"/>
      </else-if>
    </choose>
  </macro>
  <macro name="container-periodical">
    <group delimiter=". ">
      <group delimiter=", ">
        <text variable="container-title" font-style="italic" text-case="title"/>
        <choose>
          <if variable="volume">
            <group>
              <text variable="volume" font-style="italic"/>
              <text variable="issue" prefix="(" suffix=")"/>
            </group>
          </if>
          <else>
            <text variable="issue" font-style="italic"/>
          </else>
        </choose>
        <choose>
          <if variable="page">
            <text variable="page"/>
          </if>
          <else>


            <text variable="number" prefix="Article "/>
          </else>
        </choose>
      </group>
      <choose>
        <if variable="issued">
          <choose>
            <if variable="issue page volume" match="none">
              <text variable="status" text-case="capitalize-first"/>
            </if>
          </choose>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="container-booklike">
    <choose>
      <if variable="container-title" match="any">
        <group delimiter=" ">
          <text term="in" text-case="capitalize-first"/>
          <group delimiter=", ">
            <names variable="editor translator" delimiter=", &amp; ">

              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" text-case="title" prefix=" (" suffix=")"/>
              <substitute>
                <names variable="editorial-director"/>
                <names variable="collection-editor"/>
                <names variable="container-author"/>
              </substitute>
            </names>
            <group delimiter=": " font-style="italic">
              <text variable="container-title"/>

              <choose>
                <if is-numeric="volume" match="none">
                  <group delimiter=" ">
                    <label variable="volume" form="short" text-case="capitalize-first"/>
                    <text variable="volume"/>
                  </group>
                </if>
              </choose>
            </group>
          </group>
          <text macro="parenthetical-container"/>
          <text macro="bracketed-container"/>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="publisher">
    <group delimiter="; ">
      <choose>
        <if type="thesis">
          <choose>
            <if variable="archive DOI URL" match="none">
              <text variable="publisher"/>
            </if>
          </choose>
        </if>
        <else-if type="post webpage">

          <group delimiter="; ">
            <text variable="container-title" text-case="title"/>
            <text variable="publisher"/>
          </group>
        </else-if>
        <else-if type="paper-conference">

          <choose>
            <if variable="collection-editor editor editorial-director" match="any">
              <text variable="publisher"/>
            </if>
          </choose>
        </else-if>
        <else-if type="article-journal article-magazine article-newspaper post-weblog" match="none">
          <text variable="publisher"/>
        </else-if>
      </choose>
      <group delimiter=", ">
        <choose>
          <if variable="archive-place">




            <text variable="archive_location"/>
          </if>
        </choose>
        <text variable="archive"/>
        <text variable="archive-place"/>
      </group>
    </group>
  </macro>
  <macro name="access">
    <choose>
      <if variable="DOI" match="any">
        <text variable="DOI" prefix="https://doi.org/"/>
      </if>
    </choose>
  </macro>
  <macro name="event">
    <choose>
      <if variable="event">

        <choose>
          <if variable="collection-editor editor editorial-director issue page volume" match="none">

            <group delimiter=", ">
              <text variable="event"/>
              <text variable="event-place"/>
            </group>
          </if>
        </choose>
      </if>
    </choose>
  </macro>

  <macro name="publication-history">
    <choose>
      <if type="patent" match="none">
        <group prefix="(" suffix=")">
          <choose>
            <if variable="references">

              <text variable="references"/>
            </if>
            <else>
              <group delimiter=" ">
                <text value="Original work published"/>
                <choose>
                  <if is-uncertain-date="original-date">
                    <text term="circa" form="short"/>
                  </if>
                </choose>
                <date variable="original-date">
                  <date-part name="year"/>
                </date>
              </group>
            </else>
          </choose>
        </group>
      </if>
      <else>
        <text variable="references" prefix="(" suffix=")"/>
      </else>
    </choose>
  </macro>

  <macro name="legal-cites">
    <choose>
      <if type="legal_case">
        <group delimiter=". ">
          <group delimiter=", ">
            <text variable="title"/>
            <group delimiter=" ">
              <text macro="container-legal"/>
              <text macro="date-legal"/>
            </group>
            <text variable="references"/>
          </group>
          <text macro="access"/>
        </group>
      </if>
      <else-if type="bill">

        <group delimiter=". ">
          <group delimiter=", ">
            <choose>
              <if variable="number container-title" match="none">

                <text variable="title" font-style="italic"/>
              </if>
              <else>
                <text variable="title"/>
              </else>
            </choose>
            <group delimiter=" ">
              <text macro="container-legal"/>
              <text macro="date-legal"/>
              <choose>
                <if variable="number container-title" match="none">

                  <names variable="author" prefix="(testimony of " suffix=")">
                    <name and="symbol" delimiter=", "/>
                  </names>
                </if>
                <else>
                  <text variable="status" prefix="(" suffix=")"/>
                </else>
              </choose>
            </group>
            <text variable="references"/>
          </group>
          <text macro="access"/>
        </group>
      </else-if>
      <else-if type="legislation">

        <group delimiter=". ">
          <group delimiter=", ">
            <text variable="title"/>
            <group delimiter=" ">
              <text macro="container-legal"/>
              <text macro="date-legal"/>
              <text variable="status" prefix="(" suffix=")"/>
            </group>
            <text variable="references"/>
          </group>
          <text macro="access"/>
        </group>
      </else-if>
      <else-if type="treaty">

        <group delimiter=", ">
          <text variable="title" text-case="title"/>
          <names variable="author">
            <name initialize-with="." form="short" delimiter="-"/>
          </names>
          <text macro="date-legal"/>
          <text macro="container-legal"/>
          <text macro="access"/>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="date-legal">
    <choose>
      <if type="legal_case">
        <group prefix="(" suffix=")" delimiter=" ">
          <text variable="authority"/>
          <choose>
            <if variable="container-title" match="any">

              <date variable="issued" form="numeric" date-parts="year"/>
            </if>
            <else>
              <date variable="issued" form="text"/>
            </else>
          </choose>
        </group>
      </if>
      <else-if type="bill legislation" match="any">
        <group prefix="(" suffix=")" delimiter=" ">
          <group delimiter=" ">
            <date variable="original-date">
              <date-part name="year"/>
            </date>
            <text term="and" form="symbol"/>
          </group>
          <date variable="issued">
            <date-part name="year"/>
          </date>
        </group>
      </else-if>
      <else-if type="treaty">
        <date variable="issued" form="text"/>
      </else-if>
    </choose>
  </macro>
  <macro name="container-legal">

    <choose>
      <if type="legal_case">
        <group delimiter=" ">
          <choose>
            <if variable="container-title">
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <group delimiter=" ">

                  <text term="section" form="symbol"/>
                  <text variable="section"/>
                </group>
                <choose>
                  <if variable="page page-first" match="any">
                    <text variable="page-first"/>
                  </if>
                  <else>
                    <text value="___"/>
                  </else>
                </choose>
              </group>
            </if>
            <else>
              <group delimiter=" ">
                <choose>
                  <if is-numeric="number">

                    <text term="issue" form="short" text-case="capitalize-first"/>
                  </if>
                </choose>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </if>
      <else-if type="bill">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre"/>
            <group delimiter=" ">
              <choose>
                <if variable="chapter-number container-title" match="none">

                  <text term="issue" form="short"/>
                </if>
              </choose>
              <text variable="number"/>
            </group>
          </group>
          <text variable="authority"/>
          <text variable="chapter-number"/>
          <group delimiter=" ">
            <text variable="volume"/>
            <text variable="container-title"/>
            <text variable="page-first"/>
          </group>
        </group>
      </else-if>
      <else-if type="legislation">
        <choose>
          <if variable="number">

            <group delimiter=", ">
              <text variable="number" prefix="Pub. L. No. "/>
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <text variable="page-first"/>
              </group>
            </group>
          </if>
          <else>
            <group delimiter=" ">
              <text variable="volume"/>
              <text variable="container-title"/>
              <choose>
                <if variable="section">
                  <group delimiter=" ">

                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                </if>
                <else>
                  <text variable="page-first"/>
                </else>
              </choose>
            </group>
          </else>
        </choose>
      </else-if>
      <else-if type="treaty">
        <group delimiter=" ">
          <number variable="volume"/>
          <text variable="container-title"/>
          <choose>
            <if variable="page page-first" match="any">
              <text variable="page-first"/>
            </if>
            <else>
              <group delimiter=" ">

                <text term="issue" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="citation-locator">
    <group delimiter=" ">
      <choose>
        <if locator="chapter">
          <label variable="locator" text-case="capitalize-first"/>
        </if>
        <else>
          <label variable="locator" form="short"/>
        </else>
      </choose>
      <text variable="locator"/>
    </group>
  </macro>
  <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" collapse="year" givenname-disambiguation-rule="primary-name">
    <sort>
      <key macro="author-bib" names-min="3" names-use-first="1"/>
      <key macro="date-sort-group"/>
      <key macro="date-sort-date" sort="ascending"/>
      <key variable="status"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author-intext"/>
        <text macro="date-intext"/>
        <text macro="citation-locator"/>
      </group>
    </layout>
  </citation>
  <bibliography hanging-indent="true" et-al-min="21" et-al-use-first="19" et-al-use-last="true" entry-spacing="0" line-spacing="2">
    <sort>
      <key macro="author-bib"/>
      <key macro="date-sort-group"/>
      <key macro="date-sort-date" sort="ascending"/>
      <key variable="status"/>
      <key macro="title"/>
    </sort>
    <layout>
      <choose>
        <if type="bill legal_case legislation treaty" match="any">

          <choose>
            <if variable="DOI URL" match="any">
              <text macro="legal-cites"/>
            </if>
            <else>
              <text macro="legal-cites" suffix="."/>
            </else>
          </choose>
        </if>
        <else>
          <group delimiter=" ">
            <group delimiter=". " suffix=".">
              <text macro="author-bib"/>
              <text macro="date-bib"/>
              <text macro="title-and-descriptions"/>
              <text macro="container"/>
              <text macro="event"/>
              <text macro="publisher"/>
            </group>
            <text macro="access"/>
            <text macro="publication-history"/>
          </group>
        </else>
      </choose>
    </layout>
  </bibliography>
</style>`
)});
  main.variable(observer()).define(["HTMLAnchorElement","invalidation"], function(HTMLAnchorElement,invalidation)
{
  const isLocalLink = a =>
    a instanceof HTMLAnchorElement && a.getAttribute('href').match(/^#/);
  const scrollTo = e => {
    let l = e.target,
      t;
    if (
      isLocalLink(l) &&
      (t = document.querySelector(`[name="${l.hash.slice(1)}"]`))
    ) {
      e.preventDefault();
      t.scrollIntoView();
    }
  };
  document.addEventListener('click', scrollTo);
  invalidation.then(() => document.removeEventListener('click', scrollTo));
}
);
  main.variable(observer("config")).define("config", ["Cite"], function(Cite){return(
Cite.plugins.config.get('@csl')
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
