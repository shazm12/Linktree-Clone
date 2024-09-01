import { createContext, useContext, useState } from "react";
import HeaderElement from "../components/HeaderElement/HeaderElement";
import LinkElement from "../components/LinkElement/LinkElement";


const ElementsContext = createContext({});

const idGenreator = () => Math.floor(Math.random() * 1000000);;



// eslint-disable-next-line react-hooks/rules-of-hooks
export const useElements = () => {
    const context = useContext(ElementsContext);
    if (!context) {
      throw new Error('useElements must be used within an ElementsProvider');
    }
    return context;
  };

export const ElementsProvider = ({ children }) => {
    const [elements, setElements ] = useState([]);
    
    const onEditHeaderText = (id, value) => {
        setElements((prevElements) => {
            return prevElements.map((element) => element.id === id ? { ...element, content: value } : element
            );
        })
    }

    const onEditLinkElement = (id, title, description, imageURL) => {
        setElements((prevElements) => {
            return prevElements.map((element) => element.id === id ? { ...element, title: title, description: description, imageURL: imageURL } : element
            );
        })
    }

    const addHeader = (content) => {
        setElements((prevElemements) => [...prevElemements, { id: idGenreator(), content: content, type: "Header" }]);
    }

    const addLink = (title, description, imageURL) => {
        setElements((prevElemements) => [...prevElemements, { id: idGenreator(),  type: "Link", title: title, description: description, imageURL:imageURL }]);
    }
    
    const renderElementOnType = (item) => {
        if(item.type === "Header") {
            return <HeaderElement id={item.id} content={item.content} onEditHeaderText={onEditHeaderText} />;
        }
        else if(item.type === "Link") {
            return <LinkElement id={item.id} title={item.title} description={item.description} imageURL={item.imageURL} onEditLinkElement={onEditLinkElement} />
        }
    }
    return(
        <ElementsContext.Provider value={{elements , setElements, renderElementOnType, addHeader, addLink }}>
            {children}
        </ElementsContext.Provider>
    )
}
