import Cat from "../../components/Cat/Cat";
import type { NextPage } from "next";

const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "auto",
  marginBottom: 20,
};

const CatPage: NextPage = () => {
    return(
        <div>
            <div style={container}>
                <Cat />      
            </div>
        </div>
    )
}

export default CatPage;