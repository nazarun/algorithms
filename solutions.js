// Two sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Big O solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
        if(nums[i] + nums[j] === target ) {
          return [i, j];
        }
      }
    }
};

// Hash table solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
      let rest = target - nums[i];
      if (hashTable[rest] || hashTable[rest] === 0) {
        return [hashTable[rest], i];
      }
      hashTable[nums[i]] = i;
    }
};



// Maximum subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let maxSumSoFar = 0;
  
    for(let i=0; i<nums.length; i++){
      maxSumSoFar += nums[i];
      if(maxSum < maxSumSoFar){
        maxSum = maxSumSoFar;
      }
  
      if(maxSumSoFar < 0){
        maxSumSoFar = 0;
      }
    }
    return maxSum;
};


// Same tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    if(p===null || q===null)return false;
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right); 
};


// Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let [prev, current] = [null, head];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
};


// Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

var MyQueue = function () {
    this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.data.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const tempStack = [];

    while (this.data.length > 1) {
        tempStack.push(this.data.pop());
    }

    const poppedElement = this.data[0];
    this.data = [];

    while (tempStack.length) {
        this.data.push(tempStack.pop());
    }

    return poppedElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const tempStack = [];

    while (this.data.length) {
        tempStack.push(this.data.pop());
    }

    const peekedElement = tempStack[tempStack.length - 1];

    while (tempStack.length) {
        this.data.push(tempStack.pop());
    }

    return peekedElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.data.length === 0;
};
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */
