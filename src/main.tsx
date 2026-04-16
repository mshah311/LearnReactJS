import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Entitlement from './FirstModule.tsx'
import Get_entitlement from './FirstFunctionComponent.tsx'
import Get_roles_list from './SecondFunctionComponent.tsx'
import ArrowFunction from './ArrowFunctionComponent.tsx'
import Student from './Componet/ClassComponent.tsx'
import GetStudentName from './Componet/PassPropsComponent.tsx'
import GetEducationDetail from './Componet/OptionaProprtyPassing.tsx'
import GetMaterialDetail from './Componet/DefaultProps.tsx'
import GetEmployeeDetail from './Componet/PropsWithFunction.tsx'
import GetHomeDetail from './Componet/PropsWithParameters.tsx'
import GetHomeDetial2 from './Componet/ArrowFunctionomponetHome.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Entitlement/> */}
    {/* <Get_entitlement/> */}
    {/* <Get_roles_list/> */}
    {/* <ArrowFunction/> */}
    {/* <Student studentid={123}/> */}
    {/* <GetStudentName/> */}
    {/* <GetEducationDetail Collegeid='C124' collegename='KKW' collegestate='MH'/> */}
    {/* <GetMaterialDetail MaterialID='M101' MaterialName='Chemical 1' MaterialWeight={10}/> */}
    {/* <GetMaterialDetail MaterialID='M101' MaterialName='Chemical 1' /> */}
    {/* <GetEmployeeDetail /> */}
    {/* <GetHomeDetial2 /> */}
  </StrictMode>,
)


