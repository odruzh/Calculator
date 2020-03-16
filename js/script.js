var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";


// click handler
// digital buttons
function NumPressed (Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}
	
// click handler
// action button
function Operation (Op) 
{
		var Readout = Fcalc.ReadOut.value;
		if (FlagNewNum && PendingOp != "=")
		{
			Fcalc.ReadOut.value = Currents;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			Fcalc.ReadOut.value = Currents;
			PendingOp = Op;
		}
}
	
// adding a decimal point with a number
function Decimal () 
{
		var curReadOut = Fcalc.ReadOut.value;
		if (FlagNewNum) 
		{
			curReadOut = "0.";
			FlagNewNum = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1)
				curReadOut += ".";
		}
		Fcalc.ReadOut.value = curReadOut;
}
	
// Clear current result
function ClearEntry () 
{
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;
}
	
// Clear all results
function Clear () 
{
		Currents = 0;
		PendingOp = "";
		ClearEntry();

}



// change the sign of the current result
function Neg () 
{
		Fcalc.ReadOut.value = 
		parseFloat(Fcalc.ReadOut.value) * -1;
}
	
// calculate the percentage value
function Percent () 
{
		Fcalc.ReadOut.value = 
			(parseFloat(Fcalc.ReadOut.value) / 100) * 
			parseFloat(Currents);
}
