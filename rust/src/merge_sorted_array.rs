



pub fn merge_sorted_array(nums1: &mut Vec<i32>, mut m: i32, nums2: &mut Vec<i32>, mut  n: i32) {


    println!("working");

    let mut last:usize = (m + n) as usize -1;


    while m > 0 && n > 0 {
        if nums1[(m-1) as usize] > nums2[(n - 1) as usize] {
            nums1[last] = nums1[(m-1) as usize];
            m -= 1;
        }else {
            nums1[last]= nums2[(n - 1) as usize];
            n -= 1
        }

        last -= 1
    }


    println!("{:?}", nums1);

        
} 


#[cfg(test)]
mod tests {
    use super::*;


    #[test]
    fn test_case_1() {

        let mut nums1:Vec<i32> = vec![1,2,3,0,0,0];
        let mut nums2:Vec<i32> = vec![2,5,6];

        merge_sorted_array(&mut nums1, 3, &mut nums2, 3);


        assert_eq!(nums1, vec![1,2,2,3,5,6])
    }    
}