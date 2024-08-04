

pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {


    let mut i:usize = 0;

    let mut count:i32 = 0;


    for j in 1..nums.len() {


        if nums[i] != nums[j] {
            i += 1;
            nums[i]=nums[j];
            count = 0;
        }else {
            count += 1;


            if count == 1 {
                i += 1;
                nums[i]=nums[j];
            }
        }

       

        println!("{count}");

    }



    return  (i + 1) as i32;
}



#[cfg(test)]
mod  tests {

    use super::*;


    #[test]
    fn test_case_1() {

        let mut nums:Vec<i32> = vec![1,1,1,2,2,3];

        let number_of_unique_elements =  remove_duplicates(&mut nums);


        assert_eq!(number_of_unique_elements, 5);
        assert_eq!(nums, vec![1,1,2,2,3,3] )

    }

    #[test]
    fn test_case_2() {

        let mut nums:Vec<i32> = vec![0,0,1,1,1,1,2,3,3];

        let _ =  remove_duplicates(&mut nums);


        assert_eq!(nums, vec![0,0,1,1,2,3,3,3,3] )

    }
}