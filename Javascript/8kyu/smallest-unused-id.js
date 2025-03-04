//Desribtion:
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

//My Solution:
function nextId(ids){
    let x = 0
    while(ids.includes(x)) x++
    return x
  }

//Other solutions:
function nextId(ids){
	const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
  	if (!used.has(i)) return i;
  }
}
