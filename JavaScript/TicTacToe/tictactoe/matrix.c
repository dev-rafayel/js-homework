#include <stdio.h>
#include <stdbool.h>

// bool foo(int size, int matrix[3][3])
// {
    // for (int j = 0; j < 3; ++j)
    // {
    //     for (int i = 0; i < 3; ++i) 
    //     {
    //         scanf("%d", &matrix[i][j]); 
    //     }
    // }
    // printf("\n\n");
    // for (int i = 0; i < size; ++i)
    //     for (int j = 0; j < size; ++j)
    //         if (matrix[i][j]) {
    //         printf("%d", matrix[i][j]);
    //         return true;
    //         }
        

    // printf("false\n");
    // return false;
// }


int main()
{
    int size = 3;
    int matrix[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '},
    };
    
    if (matrix[0][0] == false)
    {
        printf("Yes\n");
    } else {
        printf("No\n");
    }

    // foo(size, matrix);
    // printf("\n\n\n");
    // for (int j = 0; j < 3; ++j)
    // {
    //     for (int i = 0; i < 3; ++i)
    //     {
    //         printf("%d ", matrix[i][i]);
    //     }
    //     printf("\n");
    // }
    
    
}