



pub fn remove_element(nums: &mut Vec<i32>, val:i32)->i32 {


    let mut i:usize = 0;
    

    for j in 0..nums.len() {
        if nums[j] != val {
            nums[i]=nums[j];
            i+= 1;
        }
    }

    return i as i32;
}



#[cfg(test)]
mod  tests {

    use super::*;

    #[test]
    fn test_case_1() {
        let mut nums:Vec<i32> = vec![3,2,2,3];

        remove_element(&mut nums, 3);


        assert_eq!(nums, vec![2,2,2,3])
    }
}