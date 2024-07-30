package golang_test

import (
	"reflect"
	"testing"

	"github.com/sherhonbeknuraliyev/top-interview-150/golang"
)




func TestRemoveElement(t *testing.T) {

	nums := []int {3,2,2,3}


	k := golang.RemoveElement(nums, 3)


	if (!reflect.DeepEqual(nums, []int{2,2,2,3}) || k != 2) {
		t.Fail()
	}

}