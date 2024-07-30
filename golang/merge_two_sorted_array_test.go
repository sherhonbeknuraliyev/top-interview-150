package golang_test

import (
	"reflect"
	"testing"

	"github.com/sherhonbeknuraliyev/top-interview-150/golang"
)






func TestMergeSortedArray(t *testing.T) {

	nums1 := []int{1,2,3,0,0,0}
	nums2 := []int{2,5,6}
	golang.Merge(nums1,3, nums2, 3)


	if !reflect.DeepEqual(nums1, []int{1,2,2,3,5,6}) {
		t.Fail()
	}
}