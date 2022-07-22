import randomWords from 'random-words'
// styling
import { keyValues } from 'helpers/data';
import { useEffect, useMemo, useState } from 'react';
import * as STYLE from 'styles/Test'

const Test = () => {
    const [key, setKey] = useState('')
    const [paragraph, setParagraph]: any = useState()

    useEffect(() => {
        const words: any = randomWords(500).join(' ')
        setParagraph(words)
        // setToType(words.split(''))
    }, [])

    const toType = paragraph ? paragraph.split('') : []
    const [added, setAdded]: any = useState([])
    const [value, setValue] = useState('')
    
    const addedPositive = added.filter((item: any) => item.status === "correct")
    const accuracy = Math.ceil((100 * addedPositive.length) / added.length)

    useEffect(() => {
        const valueArray = value.split('')
        if(valueArray[valueArray.length - 1] !== undefined){
            added.push({
                value: valueArray[valueArray.length - 1],
                status: valueArray[valueArray.length - 1] === toType[added.length] ? "correct" : "wrong"
            })
        }
    }, [value])

    console.log(addedPositive.length, added.length, (100 * addedPositive.length) / added.length)

    return (
        <>
            <STYLE.Timer>
                <div>21 WPS</div>
                <div>4:50 minutes remaining</div>
                <div>{accuracy}% Accuracy</div>
            </STYLE.Timer>
            <STYLE.ParagraphContainer>
                <STYLE.Paragraph>
                    <div>{paragraph}</div>
                </STYLE.Paragraph>
                <STYLE.Paragraph>
                    <div>
                        {toType.map((item: string, index: number) => (
                            <STYLE.Text status={added[index] ? added[index].status : ''}>{item}</STYLE.Text>
                        ))}
                    </div>
                    <STYLE.ParagraphInput 
                        type='text' 
                        value={value}
                        onKeyDown={(event: any) => {
                            var name = event.key;
                            setKey(name)
                        }}
                        onKeyUp={() => {
                            setKey('')
                            // setValue('')
                        }}
                        onChange={(e: any) => {
                            setValue(e.target.value)
                            // added.push({
                            //     value: valueInner,
                            //     status: valueInner === toType[added.length] ? "correct" : "wrong"
                            // })
                            // setAdded([...added, {
                            //     value: valueInner,
                            //     status: valueInner === toType[added.length] ? "correct" : "wrong"
                            // }])
                        }}
                    />
                </STYLE.Paragraph>
            </STYLE.ParagraphContainer>
            <STYLE.Keyboard>
                {keyValues.map((item: any) => {
                    return (
                        <STYLE.KeyContainer keys={item.data.length}>
                            {item.data.map((itemInner: any) => {
                                return (
                                    <STYLE.Key active={itemInner.name === "SPACE" ? key === ' ' : key === itemInner.name.toLowerCase()}>
                                        {itemInner.name}
                                    </STYLE.Key>
                                )
                            })}
                        </STYLE.KeyContainer>
                    )
                })}
            </STYLE.Keyboard>
        </>
    );
};

export default Test;