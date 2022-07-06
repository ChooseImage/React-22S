import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    // active index: piece of state ur trying to keep track of 
    // setActiveIndex: function we call to update our piece of state
    // useState(x), x = initial value of set piece

    const onTitleClick = (index) => {
        setActiveIndex(index); // Whenever this is called the app gets rerendered 
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={'title' + active}
                    onClick={() => onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={"content" + active}>
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>    
    )
};

export default Accordion;

