using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ReviewController : BaseApiController
    {
        private readonly IGenericRepository<Review> _reviewRepo;

        public ReviewController(IGenericRepository<Review> reviewRepo)
        {
            _reviewRepo = reviewRepo;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IReadOnlyList<Review>>> GetReviewTypes(int id)
        {
            var spec = new ReviewWithProductIdSpecificication(id);
            return Ok(await _reviewRepo.ListAsync(spec));
        }
    }
}
