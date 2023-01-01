//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract blc{
    struct Example{
        uint id;
        address stud;
        uint roll;
        uint timeStamp;
    }
    Example[] public examples;
    uint ids=0;
    function addExample(uint _roll)public{
        examples.push(Example(ids,msg.sender,_roll,block.timestamp));
        ids++;
    }
    function showExamples()public view returns(Example[] memory){
        return examples;
    }
    
}