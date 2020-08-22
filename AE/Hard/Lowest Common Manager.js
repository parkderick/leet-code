// You're given three inputs, all of which are instances of an OrgChart class that have a directReports property pointing to their direct reports. THe first input is the top manager in an organizational chart, and the other two inputs are reports in the organizational chart.

// Write a function that returns the lowest common manager of the two reports.

// Input
// {
//   "orgChart": {
//     "nodes": [
//       {"directReports": ["B", "C"], "id": "A", "name": "A"},
//       {"directReports": ["D", "E"], "id": "B", "name": "B"},
//       {"directReports": ["F", "G"], "id": "C", "name": "C"},
//       {"directReports": ["H", "I"], "id": "D", "name": "D"},
//       {"directReports": [], "id": "E", "name": "E"},
//       {"directReports": [], "id": "F", "name": "F"},
//       {"directReports": [], "id": "G", "name": "G"},
//       {"directReports": [], "id": "H", "name": "H"},
//       {"directReports": [], "id": "I", "name": "I"}
//     ]
//   },
//   "reportOne": "E",
//   "reportTwo": "I",
//   "topManager": "A"
// }

// Output
// {"nodeId": "B"}
function getLowestCommonManager(topManager, reportOne, reportTwo) {
	if (topManager.name === reportOne.name || topManager.name === reportTwo.name) {
		return topManager;
	}
	var result;
  function recurse(node) {
		var total = 0;
		if (node.name === reportOne.name || node.name === reportTwo.name) {
			total++;
		}
    for (var i = 0; i < node.directReports.length; i++) {
			total += recurse(node.directReports[i])
    }
		if (total === 2) {
			result = node;
			return;
		} else {
			return total;
		}
  }
	recurse(topManager);	
	return result;
}

getLowestCommonManager(orgChart, reportOne, reportTwo)