// in react we use style attribute in applicain
// style attribute will access javascript compont using camel case.
// backgroundColor -- b is lower case and C is upper case

import "./0402_MMS.css" ;
import styles from "./0402_MMS.module.css";

const StyleSetup = () => {
// in line styple
// We have to use double curle braces, 1 for typeScript expression and one for JavaScript object

const fontformat:React.CSSProperties = {color:"Blue", backgroundColor:"Gray", fontSize:40}

    return(
        <div>
            <h1 style = {{color:"Blue", backgroundColor:"Gray", fontSize:60}}> MMS InfoTech -- Inline   </h1>
            <h1 style = {fontformat}> MMS InfoTech - Inline with const defined in the file const fontformat:React....  </h1>

            <p className="MMS_Para"> MMS InfoTech -- Style defined in CSS file  </p>

            <button className="MMS_Button"> Click me -- style defined in CSS file </button>

            <h1 className={styles.MMSLabel}> MMS InfoTech -- CSS defined as module </h1>

            <button type="button" classNamenpm run dev="btn btn-primary"> Click me -- from BootStrap   </button>

        </div>
    );
}

export default StyleSetup;

