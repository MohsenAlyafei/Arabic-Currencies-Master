/************************************************************************
* @function : arqamNumberSplit(Num, DecimalPlaces, [RemovedTrailingZeros])
* @purpose  : Splits a Float Number into its whole and fractional parts
*             taking into account the required rounding for the
*             Decimal Part.
*             The Whole Part is not affected by the rounding
*             of the Decimal Part.
* @version  : 1.02
* @author   : Mohsen Alyafei
* @date     : 25 July 2020
* @param      {Num} Float Number to be splitted.
* @param      {DecimalPlaces} Number of deciaml places for rounding
*             0 : No fraction need. An "" empty string is returned
*             -1: No Rounding required (keep original fraction as is)
*             The max number of deciaml place is 20.
* @param      {RemovedTrailingZeros} [Optional] removes trailing zeros from
*             the fraction part irrespective of the number of required
*             decimal places.
* @return   : Arrays of 2 {String} Elements Containing the Whole Part
*             and the Fraction Part as string.
*             The Fraction is formatted to the decimal places requested.
*             Returns "" (Empty String) for Whole Number if 0 or none
*             Returns "" (Empty String) for Fraction or if 0 or none
*             Note: Empty strings are handy for logical testing.
*************************************************************************/

export function arqamNumberSplit(Num,DecimalPlaces,RemovedTrailingZeros=0){
Num= (Num+"").split(0.1.toLocaleString().substr(1,1));
let a, WholePart=Num[0], fractionalPart= Num[1];
if (DecimalPlaces>=0) {
fractionalPart = Num.length ==2 ?
       fractionalPart && (fractionalPart="0."+fractionalPart,
       a=(+fractionalPart).toFixed(DecimalPlaces),
       fractionalPart = ( a <1 ? a : fractionalPart).substr(2,DecimalPlaces)) : "";
  if (RemovedTrailingZeros) fractionalPart=(""+(+("0."+fractionalPart))).substr(2);
}
return [!+WholePart? "" : WholePart, !+fractionalPart?"":fractionalPart];
}