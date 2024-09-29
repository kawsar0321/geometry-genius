function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1')
    const d2 = getInputValue('rhombus-d2');
    const area = 0.5 * d1 * d2;

    setInnerText('rhombus-area', area);
}