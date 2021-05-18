using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IReviewRepository
    {
        Task<Review> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Review>> GetProductsAsync();
        Task<IReadOnlyList<Review>> GetProductBrandsAsync();
        Task<IReadOnlyList<Review>> GetProductTypesAsync();
        Task<ICollection<Review>> GetReviewByIdAsync(int id);
    }
}
