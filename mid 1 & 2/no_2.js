function tempertureConverter(a)
{
    a = parseFloat(a);
    var calsius = (a - 32);
    if(calsius % 1.8 == 0)
    {
        calsius = (a - 32) / 1.8;
        console.log(calsius.toFixed(2));
    }
    else
    {
        calsius = parseInt(calsius);
        calsius = (a - 32) / 1.8;
        console.log(calsius.toFixed(2));
    }
    return tempertureConverter;
}

tempertureConverter(50);
tempertureConverter(103);