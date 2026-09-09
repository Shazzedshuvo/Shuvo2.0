import { NextResponse } from 'next/server';
import { allSkills, featuredSkills } from '@/lib/data/skillsData';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const featuredOnly = searchParams.get('featured') === 'true';

    if (featuredOnly) {
      return NextResponse.json({
        success: true,
        count: featuredSkills.length,
        data: featuredSkills
      });
    }

    let filtered = [...allSkills];

    if (category && category !== 'All') {
      filtered = filtered.filter(
        (s) => s.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve skills' },
      { status: 500 }
    );
  }
}
