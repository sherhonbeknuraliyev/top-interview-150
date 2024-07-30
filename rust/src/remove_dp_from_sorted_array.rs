

pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {


    let mut i:usize = 0;

    for j in 1..nums.len() {

        if nums[i] != nums[j] {
            i += 1;
            nums[i]=nums[j];
        }
    }



    return  (i + 1) as i32;
}



#[cfg(test)]
mod  tests {

    use super::*;


    #[test]
    fn test_case_1() {

        let mut nums:Vec<i32> = vec![1,1,2];

        let number_of_unique_elements =  remove_duplicates(&mut nums);


        assert_eq!(number_of_unique_elements, 2);
        assert_eq!(nums, vec![1,2,2] )

    }
}