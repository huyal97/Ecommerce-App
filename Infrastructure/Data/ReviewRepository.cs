using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly StoreContext _context;
        public ReviewRepository(StoreContext context)
        {
            _context = context;
        }

        public Task<IReadOnlyList<Review>> GetProductBrandsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Review> GetProductByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<Review>> GetProductsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<Review>> GetProductTypesAsync()
        {
            throw new System.NotImplementedException();
        }

        public async Task<ICollection<Review>> GetReviewByIdAsync(int id)
        {
            return await _context.Reviews.Where(p => p.ProductId == id).ToListAsync();
        }

        
    }
}