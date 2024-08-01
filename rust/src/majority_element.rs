



pub fn majority_element(nums:Vec<i32>)->i32 {




    let mut candidate = nums[0];
    let mut count = 0;





    for i in 1..nums.len() {
        if nums[i] == candidate {
            count += 1
        }else {
             count -= 1;
             if count == 0 {
                candidate = nums[i];
                count = 1;
            }
        }

        
    }



    return  candidate;

}




#[cfg(test)]
mod tests {

    use super::*;



    fn test_case_1() {
        let result =  majority_element(vec![3,2,3]);

        assert_eq!(result, 3)
    }

    fn test_case_2() {
        let result = majority_element(vec![2,2,1,1,1,2,2]);

        assert_eq!(result,2);
    }


}