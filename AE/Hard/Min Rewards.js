// Imagine that you're a teacher who's just graded the final exam in a class. You have a list of students scores on the final exam in a particular order, and you want to reward your students. You decide to do so fairly by giving them arbitrary rewardss following two rules:
// 1. All students must receive at least one reward.
// 2. Any given student must receive strictly more rewards than an adjancet student with a lower score and must receive sstrictly few rewards than an adjacent student with a higher score.

// Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.

// You can assume that all students have different scores; in other words, the scores are all unique.

// var scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
// output = 25

// Time: O(n) n length of scores
// Space: O(n) n length of scores

function minRewards(scores) {
  var rewards = new Array(scores.length).fill(1);

  for (var i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i-1]) {
      rewards[i] = rewards[i-1] + 1;
    }
  }

  for (var i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i+1]) {
      rewards[i] = Math.max(rewards[i], rewards[i+1] + 1);
    }
  }

  return rewards.reduce((a,b) => a+b)
}


console.log(minRewards(scores))