load = [00,7.3,15.1,23.1,30.4,34.4,38.4,41.3,44.8,46.2,47.3,47.5,46.1,44.8,42.6,36.4];
length = [50.8,50.851,50.902,50.952,51.003,51.054,51.308,51.816,52.832,53.848,54.864,55.88,56.896,57.658,58.42,59.182];
 stress = []
 strain = []
 let E = 60 * 10^9

for (let i = 0; i < load.length; i++) {
	stress.push(load[i] * 1000/ (12.8/2*12.8/2 * Math.PI)/1000*1000)
	strain.push((length[i] - 50.8) / 50.8)
}

console.log("--------------------------------------------")
console.log("|...Stress (MPa) .... | ......Strain....... |")
console.log("--------------------------------------------")
for (let i = 0; i < load.length; i++) {
	let stressW = (22-stress[i].toFixed(2).toString().length)/2
	let strainW = (22-strain[i].toFixed(5).toString().length)/2
	console.log(`|${' '.repeat(stressW)}${stress[i].toFixed(2)}${' '.repeat(stressW)}|${' '.repeat(strainW)}${strain[i].toFixed(5)}${' '.repeat(strainW)}|`)
}
console.log("--------------------------------------------")
